export interface IDotsProps {
	currentSlide: number;
	goToSlide: (index: number) => void;
	slides: Array<{ id: string }>;
	showPagination: boolean;
}
