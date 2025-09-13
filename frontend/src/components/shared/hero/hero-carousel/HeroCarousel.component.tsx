"use client";
import { IHeroCarouselProps } from "./HeroCarousel.types";
import { useHeroSlider } from "./useHeroSlider";
import Dots from "./dots/Dots.component";
import NavButtons from "./nav-buttons/NavButtons.component";
import Background from "./background/Background.component";
import Content from "./content/Content.component";

export default function HeroCarousel({
	slides,
	autoPlay = true,
	autoPlayInterval = 5000,
	showNavigation = true,
	showPagination = true,
	className = "",
	onSlideChange,
}: IHeroCarouselProps) {
	const {
		currentSlide,
		isTransitioning,
		nextSlide,
		prevSlide,
		goToSlide,
		pauseAutoPlay,
		resumeAutoPlay,
	} = useHeroSlider({
		slidesLength: slides.length,
		autoPlay,
		autoPlayInterval,
		onSlideChange,
	});

	const currentSlideData = slides[currentSlide];

	return (
		<section
			className={`relative h-screen overflow-hidden ${className}`}
			onMouseEnter={pauseAutoPlay}
			onMouseLeave={resumeAutoPlay}
		>
			<Background currentSlide={currentSlide} slides={slides} />
			<Content
				currentSlideData={currentSlideData}
				isTransitioning={isTransitioning}
			/>
			<NavButtons
				showNavigation={showNavigation}
				nextSlide={nextSlide}
				prevSlide={prevSlide}
				slides={slides}
			/>
			<Dots
				currentSlide={currentSlide}
				goToSlide={goToSlide}
				slides={slides}
				showPagination={showPagination}
			/>
		</section>
	);
}
