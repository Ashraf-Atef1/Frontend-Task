"use client";
import { useState, useEffect, useCallback } from "react";
import { IUseHeroSliderProps } from "../Hero.types";

export function useHeroSlider({
	slidesLength,
	autoPlay = true,
	autoPlayInterval = 5000,
	onSlideChange,
}: IUseHeroSliderProps) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isPlaying, setIsPlaying] = useState(autoPlay);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const nextSlide = useCallback(() => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentSlide((prev) => (prev + 1) % slidesLength);
		setTimeout(() => setIsTransitioning(false), 500);
	}, [slidesLength, isTransitioning]);

	const prevSlide = useCallback(() => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentSlide((prev) => (prev - 1 + slidesLength) % slidesLength);
		setTimeout(() => setIsTransitioning(false), 500);
	}, [slidesLength, isTransitioning]);

	const goToSlide = useCallback(
		(index: number) => {
			if (isTransitioning || index === currentSlide) return;
			setIsTransitioning(true);
			setCurrentSlide(index);
			setTimeout(() => setIsTransitioning(false), 500);
		},
		[currentSlide, isTransitioning]
	);

	const pauseAutoPlay = useCallback(() => setIsPlaying(false), []);
	const resumeAutoPlay = useCallback(() => setIsPlaying(autoPlay), [autoPlay]);

	// Auto-play functionality
	useEffect(() => {
		if (!isPlaying) return;

		const interval = setInterval(nextSlide, autoPlayInterval);
		return () => clearInterval(interval);
	}, [isPlaying, nextSlide, autoPlayInterval]);

	// Keyboard navigation
	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") {
				prevSlide();
			} else if (e.key === "ArrowRight") {
				nextSlide();
			}
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);
	}, [nextSlide, prevSlide]);

	// Notify parent component of slide changes
	useEffect(() => {
		if (onSlideChange) {
			onSlideChange(currentSlide);
		}
	}, [currentSlide, onSlideChange]);

	return {
		currentSlide,
		isTransitioning,
		isPlaying,
		nextSlide,
		prevSlide,
		goToSlide,
		pauseAutoPlay,
		resumeAutoPlay,
	};
}
