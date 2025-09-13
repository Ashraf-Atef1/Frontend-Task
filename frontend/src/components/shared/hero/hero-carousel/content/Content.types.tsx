import { IHeroSlideData } from "@/lib/api/types/hero.types";

export interface IContentProps {
	currentSlideData: IHeroSlideData;
	isTransitioning: boolean;
}
