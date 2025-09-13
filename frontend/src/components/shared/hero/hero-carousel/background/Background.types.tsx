import { IHeroSlideData } from "@/lib/api/types/hero.types";

export interface IBackgroundProps {
	slides: IHeroSlideData[];
	currentSlide: number;
}
