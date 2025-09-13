import Image from "next/image";
import { ITestimonialCardProps } from "./TestimonialCard.types";

export default function TestimonialCard({
	testimonial,
}: ITestimonialCardProps) {
	return (
		<div className="flex gap-8 container max-lg:flex-col">
			<div className="relative h-full max-h-64 max-w-64 aspect-square flex-1">
				<Image
					src={testimonial.photo.url}
					alt={testimonial.name}
					fill
					className="object-cover"
					sizes="64px"
				/>
			</div>

			<div className="flex-4 flex flex-col gap-6 justify-between">
				<p className="text-lg md:text-xl opacity-60">{testimonial.content}</p>
				<div className="flex flex-col gap-3">
					<h3 className="text-2xl font-bold">{testimonial.name}</h3>
					<h4>{testimonial.role}</h4>
				</div>
			</div>
		</div>
	);
}
