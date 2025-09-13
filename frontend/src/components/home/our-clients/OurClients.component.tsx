import React from "react";
import { IOurClientsProps } from "./OurClients.types";
import ClientCarousel from "./client-carousel/ClientCarousel.component";
import { getOurClients, getOurCompanies } from "@/lib/api/ourClients.route";
import TestimonialCarousel from "./testimonial-carousel/TestimonialCarousel.component";

export default async function OurClients({
	showTestimonials = true,
	showClientLogos = true,
	autoPlay = true,
	className = "",
}: IOurClientsProps) {
	const clientsData = await getOurClients();
	const companiesData = await getOurCompanies();

	return (
		<section className={`py-16 bg-primary text-white ${className}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<TestimonialCarousel
					showTestimonials={showTestimonials}
					autoPlay={autoPlay}
					testimonials={clientsData}
				/>
				<ClientCarousel
					showClientLogos={showClientLogos}
					clientLogos={companiesData}
				/>
			</div>
		</section>
	);
}
