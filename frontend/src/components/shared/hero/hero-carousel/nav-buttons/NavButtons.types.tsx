import { IHeroSlideData } from "@/lib/api/types/hero.types";

export interface INavButtonsProps {
	showNavigation: boolean;
	slides: IHeroSlideData[];
	prevSlide: () => void;
	nextSlide: () => void;
}
