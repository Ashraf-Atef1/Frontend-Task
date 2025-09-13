import { Link } from "@/i18n/routing";
import { ISearchResult } from "../TeamServices.types";
import { useLocale, useTranslations } from "use-intl";

interface ISearchResultCardProps {
	result: ISearchResult;
	searchQuery?: string;
}

export default function SearchResultCard({
	result,
	searchQuery,
}: ISearchResultCardProps) {
	const language = useLocale() as "en" | "ar";
	const t = useTranslations("search_result");
	const highlightText = (text: string, query?: string) => {
		if (!query || query.trim() === "") return text;

		const regex = new RegExp(`(${query.trim()})`, "gi");
		const parts = text.split(regex);

		return parts.map((part, index) =>
			regex.test(part) ? (
				<mark key={index} className="bg-yellow-200 text-gray-900 px-1 rounded">
					{part}
				</mark>
			) : (
				part
			)
		);
	};

	return (
		<div
			className={`bg-white border-b p-6 hover:shadow-md transition-shadow duration-200 `}
		>
			{result.category && (
				<div className={`mb-3`}>
					<span
						className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
							result.type === "team"
								? "bg-blue-100 text-blue-800"
								: "bg-green-100 text-green-800"
						}`}
					>
						{result.category[language]}
					</span>
				</div>
			)}

			<h3 className={`text-lg font-semibold text-gray-900 mb-2`}>
				{highlightText(result.title[language], searchQuery)}
			</h3>

			<p className={`text-gray-600 mb-4 leading-relaxed`}>
				{highlightText(result.description[language], searchQuery)}
			</p>

			<div>
				{result.url ? (
					<Link
						href={result.url}
						className="text-amber-800 hover:text-amber-900 font-medium text-sm underline transition-colors duration-200"
					>
						{t("readMore")}
					</Link>
				) : (
					<button className="text-amber-800 hover:text-amber-900 font-medium text-sm underline transition-colors duration-200">
						{t("readMore")}
					</button>
				)}
			</div>
			{result.tags && result.tags.length > 0 && (
				<div className={`mt-4 flex flex-wrap gap-2 flex-row`}>
					{result.tags.slice(0, 3).map((tag, index) => (
						<span
							key={index}
							className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700"
						>
							{tag}
						</span>
					))}
				</div>
			)}
		</div>
	);
}
