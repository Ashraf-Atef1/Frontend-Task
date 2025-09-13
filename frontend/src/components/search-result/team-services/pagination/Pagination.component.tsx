import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IPaginationProps } from "../TeamServices.types";
import { useTranslations } from "next-intl";

export default function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: IPaginationProps) {
	const t = useTranslations("search_result");
	const renderPageNumbers = () => {
		const pages = [];
		const maxVisiblePages = 5;
		let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
		const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

		// Adjust start page if we're near the end
		if (endPage - startPage < maxVisiblePages - 1) {
			startPage = Math.max(1, endPage - maxVisiblePages + 1);
		}

		// Previous pages indicator
		if (startPage > 1) {
			pages.push(
				<button
					key="1"
					onClick={() => onPageChange(1)}
					className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
				>
					1
				</button>
			);
			if (startPage > 2) {
				pages.push(
					<span key="dots1" className="px-2 py-2 text-gray-400">
						...
					</span>
				);
			}
		}

		// Visible page numbers
		for (let i = startPage; i <= endPage; i++) {
			pages.push(
				<button
					key={i}
					onClick={() => onPageChange(i)}
					className={`px-3 py-2 text-sm rounded-md transition-colors ${
						i === currentPage
							? "bg-amber-800 text-white"
							: "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
					}`}
				>
					{i}
				</button>
			);
		}

		// Next pages indicator
		if (endPage < totalPages) {
			if (endPage < totalPages - 1) {
				pages.push(
					<span key="dots2" className="px-2 py-2 text-gray-400">
						...
					</span>
				);
			}
			pages.push(
				<button
					key={totalPages}
					onClick={() => onPageChange(totalPages)}
					className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
				>
					{totalPages}
				</button>
			);
		}

		return pages;
	};

	if (totalPages <= 1) return null;

	return (
		<div className={`flex items-center justify-center gap-2 mt-8 flex-row`}>
			<button
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				aria-label={t("prevPage")}
			>
				<FaChevronLeft size={14} />
			</button>

			<div className={`flex items-center gap-1 flex-row`}>
				{renderPageNumbers()}
			</div>

			<button
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				aria-label={t("nextPage")}
			>
				<FaChevronRight size={14} />
			</button>
		</div>
	);
}
