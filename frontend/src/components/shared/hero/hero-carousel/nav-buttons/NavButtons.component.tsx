import { ChevronLeft, ChevronRight } from "lucide-react";
import { INavButtonsProps } from "./NavButtons.types";
import styles from "./styles.module.css";

export default function NavButtons({
	showNavigation,
	slides,

	prevSlide,
	nextSlide,
}: INavButtonsProps) {
	if (showNavigation && slides.length > 1) {
		return (
			<>
				<button
					onClick={nextSlide}
					className={`${styles.navigationButton} ${styles.right}`}
					aria-label={"Next slide"}
				>
					<ChevronLeft className="w-6 h-6" />
				</button>

				<button
					onClick={prevSlide}
					className={`${styles.navigationButton} ${styles.left}`}
					aria-label={"Previous slide"}
				>
					<ChevronRight className="w-6 h-6" />
				</button>
			</>
		);
	} else {
		return null;
	}
}
