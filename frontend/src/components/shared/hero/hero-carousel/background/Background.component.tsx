import Image from "next/image";
import { IBackgroundProps } from "./Background.types";
import styles from "./styles.module.css";

export default function Background({ slides, currentSlide }: IBackgroundProps) {
	return (
		<div className="absolute inset-0">
			{slides.map((slide, index) => (
				<div
					key={slide.id}
					className={`${styles.slideContainer} ${
						index === currentSlide ? styles.slideActive : styles.slideInactive
					}`}
				>
					{slide.background_image?.url &&
						(slide.background_image?.mime.startsWith("image") ? (
							<Image
								src={slide.background_image.url}
								alt={slide.title || ""}
								fill
								className="object-cover"
								priority={index === 0}
								sizes="100vw"
							/>
						) : (
							<video
								src={slide.background_image.url}
								autoPlay={index === currentSlide}
								loop
								muted
								playsInline
								className="w-full h-full object-cover"
							/>
						))}
				</div>
			))}
			<div className={styles.backgroundOverlay} />
		</div>
	);
}
