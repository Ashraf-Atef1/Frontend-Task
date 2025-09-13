import { IHeroSlideData } from "@/lib/api/types/hero.types";

export interface IHeroCarouselProps {
	slides: IHeroSlideData[];
	autoPlay?: boolean;
	autoPlayInterval?: number;
	showNavigation?: boolean;
	showPagination?: boolean;
	className?: string;
	onSlideChange?: (index: number) => void;
}
