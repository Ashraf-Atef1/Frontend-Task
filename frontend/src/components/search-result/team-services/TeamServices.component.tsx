"use client";
import { useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";
import { ITeamServicesProps } from "./TeamServices.types";
import { mockSearchResults } from "./TeamServices.data";
import SearchResultCard from "./search-result-card/SearchResultCard.component";
import Pagination from "./pagination/Pagination.component";
import { useLocale, useTranslations } from "next-intl";

export default function TeamServices({
	searchQuery: propSearchQuery,
	results = mockSearchResults,
	className = "",
	onBack,
}: ITeamServicesProps) {
	const language = useLocale() as "en" | "ar";
	const router = useRouter();
	const searchParams = useSearchParams();
	const [currentPage, setCurrentPage] = useState(1);
	const [activeTab, setActiveTab] = useState<"team" | "services">("team");

	const searchQuery = propSearchQuery || searchParams.get("q") || "";
	const resultsPerPage = 5;
	const t = useTranslations("search_result");

	// Filter results based on search query and active tab
	const filteredResults = useMemo(() => {
		let filtered = results;

		// Filter by search query
		if (searchQuery.trim() !== "") {
			filtered = filtered.filter(
				(result) =>
					result.title[language]
						.toLowerCase()
						.includes(searchQuery.toLowerCase()) ||
					result.description[language]
						.toLowerCase()
						.includes(searchQuery.toLowerCase()) ||
					result.tags?.some((tag) =>
						tag.toLowerCase().includes(searchQuery.toLowerCase())
					)
			);
		}

		// Filter by tab
		if (activeTab === "team") {
			filtered = filtered.filter((result) => result.type === "team");
		} else if (activeTab === "services") {
			filtered = filtered.filter((result) => result.type === "service");
		}

		return filtered;
	}, [results, searchQuery, activeTab, language]);

	// Paginate results
	const paginatedResults = useMemo(() => {
		const startIndex = (currentPage - 1) * resultsPerPage;
		const endIndex = startIndex + resultsPerPage;
		return filteredResults.slice(startIndex, endIndex);
	}, [filteredResults, currentPage, resultsPerPage]);

	const totalPages = Math.ceil(filteredResults.length / resultsPerPage);

	// Reset pagination when filters change
	useEffect(() => {
		setCurrentPage(1);
	}, [searchQuery, activeTab]);

	const handleBack = () => {
		if (onBack) {
			onBack();
		} else {
			router.back();
		}
	};

	const handleTabChange = (tab: "team" | "services") => {
		setActiveTab(tab);
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		// Scroll to top when page changes
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className={`min-h-screen ${className}`}>
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className={`mb-8`}>
					<button
						onClick={handleBack}
						className={`flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors`}
					>
						<FaChevronLeft
							size={14}
							style={{
								transform: language === "ar" ? "rotate(180deg)" : "none",
							}}
						/>
						<span>{t("back")}</span>
					</button>
				</div>
				<div className={`flex gap-8`}>
					<div className="w-64 flex-shrink-0">
						<div className="bg-secondary-200 p-6">
							<nav className="space-y-2">
								<button
									onClick={() => handleTabChange("team")}
									className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
										activeTab === "team"
											? "bg-amber-50 text-amber-800 font-medium border-l-4 border-amber-800"
											: "text-gray-700 hover:bg-gray-50"
									}`}
								>
									{t("team")}
								</button>
								<button
									onClick={() => handleTabChange("services")}
									className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
										activeTab === "services"
											? "bg-amber-50 text-amber-800 font-medium border-l-4 border-amber-800"
											: "text-gray-700 hover:bg-gray-50"
									}`}
								>
									{t("service")}
								</button>
							</nav>
						</div>
					</div>
					<div className="flex-1">
						{filteredResults.length > 0 && (
							<div className={`mb-6`}>
								<p className="text-sm text-gray-600">
									{`${Math.min(paginatedResults.length, resultsPerPage)} ${t(
										"of"
									)} ${filteredResults.length}`}
									{searchQuery && (
										<span className="font-medium">
											{` ${t("for")} "${searchQuery}"`}
										</span>
									)}
								</p>
							</div>
						)}
						<div className="space-y-4">
							{paginatedResults.length > 0 ? (
								paginatedResults.map((result) => (
									<SearchResultCard
										key={result.id}
										result={result}
										searchQuery={searchQuery}
									/>
								))
							) : (
								<div className={`text-center py-12`}>
									<h3 className="text-lg font-medium text-gray-900 mb-2">
										{t("noResults")}
									</h3>
									<p className="text-gray-600">{t("noResultsDescription")}</p>
								</div>
							)}
						</div>
						{paginatedResults.length > 0 && (
							<Pagination
								currentPage={currentPage}
								totalPages={totalPages}
								onPageChange={handlePageChange}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
