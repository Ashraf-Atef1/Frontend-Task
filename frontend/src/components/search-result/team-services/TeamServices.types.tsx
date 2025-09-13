export interface ISearchResult {
	id: string;
	title: {
		en: string;
		ar: string;
	};
	description: {
		en: string;
		ar: string;
	};
	type: "team" | "service";
	category?: {
		en: string;
		ar: string;
	};
	url?: string;
	tags?: string[];
}

export interface ITeamServicesProps {
	searchQuery?: string;
	results?: ISearchResult[];
	className?: string;
	onBack?: () => void;
}

export interface IPaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}
