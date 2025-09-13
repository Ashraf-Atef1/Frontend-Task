export interface IHeroSlide {
	id: string;
	type: "image" | "video";
	background_image: string;
	small_image: string;
	title: string;
	button_title: string;
	description: string;
}

export interface IHeroProps {
	slides?: IHeroSlide[];
	autoPlay?: boolean;
	autoPlayInterval?: number;
	showNavigation?: boolean;
	showPagination?: boolean;
	className?: string;
	onSlideChange?: (index: number) => void;
}

export interface IUseHeroSliderProps {
	slidesLength: number;
	autoPlay?: boolean;
	autoPlayInterval?: number;
	onSlideChange?: (slideIndex: number) => void;
}
