import { ICompanyData } from "@/lib/api/types/cleint.types";
import Image from "next/image";

export default function ClientLogoCard({ alt, image, url }: ICompanyData) {
	const handleClick = () => {
		if (url) {
			window.open(url, "_blank");
		}
	};

	return (
		<div
			className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex items-center justify-center h-24 mx-4 group ${
				url ? "cursor-pointer" : ""
			}`}
			onClick={handleClick}
		>
			<div className="relative w-full h-full flex items-center justify-center">
				<Image
					src={image.url}
					alt={alt}
					width={120}
					height={60}
					className="object-contain max-w-full max-h-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
					style={{ filter: "grayscale(100%)" }}
					onLoad={(e) => {
						const img = e.target as HTMLImageElement;
						img.style.filter = "grayscale(100%)";
					}}
					onMouseEnter={(e) => {
						const img = e.target as HTMLImageElement;
						img.style.filter = "grayscale(0%)";
					}}
					onMouseLeave={(e) => {
						const img = e.target as HTMLImageElement;
						img.style.filter = "grayscale(100%)";
					}}
				/>
			</div>
		</div>
	);
}
