import { Button } from "@/components/ui/button";
import styles from "./styles.module.css";
import { IContentProps } from "./Content.types";
import Image from "next/image";

export default function Content({
	currentSlideData,
	isTransitioning,
}: IContentProps) {
	return (
		<div className={styles.contentContainer}>
			<div className="container mx-auto px-9 flex justify-between max-lg:flex-col-reverse gap-4 items-center">
				<div className={`${styles.contentWrapper}`}>
					<h1
						className={`${styles.title} ${
							isTransitioning ? styles.transitioning : ""
						}`}
					>
						{currentSlideData.title}
					</h1>

					<p
						className={`${styles.description} ${
							isTransitioning ? styles.transitioning : ""
						}`}
					>
						{currentSlideData.description}
					</p>

					<Button
						size="lg"
						className={`cursor-pointer bg-secondary text-primary hover:bg-secondary-600 hover:text-primary ${
							isTransitioning ? styles.transitioning : ""
						}`}
					>
						{currentSlideData.button_title}
					</Button>
				</div>
				{currentSlideData.small_image?.url && (
					<Image
						src={currentSlideData.small_image.url}
						alt={"Slide Image"}
						className={styles.image}
						loading={isTransitioning ? "lazy" : "eager"}
						width={600}
						height={400}
					/>
				)}
			</div>
		</div>
	);
}
