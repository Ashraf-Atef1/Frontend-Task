import { IDotsProps } from "./Dots.Types";
import styles from "./styles.module.css";

export default function Dots({
	currentSlide,
	goToSlide,
	slides,
	showPagination,
}: IDotsProps) {
	if (showPagination && slides.length > 1) {
		return (
			<>
				<div className={`${styles.paginationContainer}`}>
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`${styles.paginationDot} ${
								index === currentSlide ? styles.active : ""
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
				<div
					className={`absolute top-[60%] left-10 flex flex-col gap-2 z-10 transform -translate-x-1/2 `}
				>
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`bg-transparent border border-white rounded-full w-2.5 h-2.5 transition-all duration-300 ${
								index === currentSlide ? "bg-white" : "hover:bg-white"
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</>
		);
	} else {
		return null;
	}
}
