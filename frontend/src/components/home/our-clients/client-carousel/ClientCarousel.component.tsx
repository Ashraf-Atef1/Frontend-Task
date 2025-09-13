"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { IClientCarouselProps } from "./ClientCarousel.types";
import ClientLogoCard from "../client-logo-card/ClientLogoCard.component";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { useLocale, useTranslations } from "use-intl";

export default function ClientCarousel({
	showClientLogos,
	clientLogos,
}: IClientCarouselProps) {
	const locale = useLocale();
	const t = useTranslations("our_clients");
	const autoplayPlugin = useRef(
		Autoplay({ delay: 3000, stopOnInteraction: true })
	);
	if (showClientLogos)
		return (
			<div>
				<div className={`text-center mb-8`}>
					<h3 className={`text-2xl md:text-3xl font-bold text-amber-100`}>
						{t("clientsTitle")}
					</h3>
				</div>

				<div className="relative">
					<Carousel
						opts={{
							align: "start",
							loop: true,
							direction: locale === "ar" ? "rtl" : "ltr",
						}}
						plugins={[autoplayPlugin.current]}
						className="w-full"
					>
						<CarouselContent className="">
							{clientLogos.map((logo) => (
								<CarouselItem
									key={logo.id}
									className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6"
								>
									<ClientLogoCard {...logo} />
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			</div>
		);
	else return null;
}
