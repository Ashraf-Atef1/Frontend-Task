import { getHero } from "@/lib/api/hero.route";
import HeroCarousel from "./hero-carousel/HeroCarousel.component";

export default async function Hero() {
	const slidesData = await getHero();
	if (!slidesData || slidesData.length === 0) {
		return null;
	}
	return <HeroCarousel slides={slidesData} autoPlay />;
}
