"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { ITestimonialCarouselProps } from "./TestimonialCarousel.types";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";
import TestimonialCard from "../testimonial-card/TestimonialCard.component copy";

export default function TestimonialCarousel({
	showTestimonials,
	testimonials,
	autoPlay,
}: ITestimonialCarouselProps) {
	const locale = useLocale();
	const t = useTranslations("our_clients");
	const autoplayPlugin = useRef(
		Autoplay({ delay: 3000, stopOnInteraction: true })
	);
	if (showTestimonials)
		return (
			<div className="mb-16">
				<div className={`text-center mb-12 flex flex-col items-center`}>
					<h2 className={`text-3xl md:text-4xl font-bold mb-6`}>
						{t("title")}
					</h2>
					<p
						className={`text-md md:text-lg text-secondary opacity-70 max-w-4xl`}
					>
						{t("description")}
					</p>
				</div>

				<div className="relative">
					<Carousel
						opts={{
							align: "start",
							loop: true,
							direction: locale === "ar" ? "rtl" : "ltr",
						}}
						plugins={autoPlay ? [autoplayPlugin.current] : []}
						className="w-full"
					>
						<CarouselContent className="-ml-2 md:-ml-4">
							{testimonials.map((testimonial) => (
								<CarouselItem key={testimonial.id} className="pl-2 md:pl-4">
									<TestimonialCard testimonial={testimonial} />
								</CarouselItem>
							))}
						</CarouselContent>
						<div className={"flex justify-end mt-10 gap-8"}>
							<CarouselPrevious
								className="hidden md:flex w-18 h-18 !static bg-white/10 border-white/20 hover:bg-white text-white cursor-pointer"
								style={{
									order: locale === "ar" ? 2 : 0,
								}}
							/>
							<CarouselNext className="hidden md:flex w-18 h-18 !static bg-white/10 border-white/20 hover:bg-white text-white cursor-pointer" />
						</div>
					</Carousel>
				</div>
			</div>
		);
	else return null;
}
