import { IClientData } from "@/lib/api/types/cleint.types";

export interface ITestimonialCarouselProps {
	showTestimonials?: boolean;
	testimonials: IClientData[];
	autoPlay: boolean;
}
