"use client";
import TeamMemberCard from "../team-member-card/TeamMemberCard.component";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { IOurTeamCarouselProps } from "./OurTeamCarousel.types";
import { useLocale } from "next-intl";

export default function OurTeamCarousel({ members }: IOurTeamCarouselProps) {
	const locale = useLocale();
	if (!members || members.length === 0) return null;
	return (
		<Carousel
			opts={{
				loop: true,
				align: "start",
				skipSnaps: false,
				dragFree: false,
				direction: locale === "ar" ? "rtl" : "ltr",
			}}
			plugins={[
				Autoplay({
					stopOnFocusIn: true,
					delay: 3000,
					stopOnInteraction: true,
				}),
			]}
			className="w-ful flex justify-center p-10"
		>
			<CarouselContent>
				{members.map((member) => (
					<CarouselItem
						key={member.id}
						className="pl-4 md:pl-8 basis-full md:basis-1/2 lg:basis-1/3"
					>
						<TeamMemberCard member={member} />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="max-lg:hidden !bg-transparent !border-none !shadow-none left-0 z-10 cursor-pointer hover:!bg-gray-100" />
			<CarouselNext className="max-lg:hidden !bg-transparent !border-none !shadow-none right-0 z-10 cursor-pointer hover:!bg-gray-100" />
		</Carousel>
	);
}
