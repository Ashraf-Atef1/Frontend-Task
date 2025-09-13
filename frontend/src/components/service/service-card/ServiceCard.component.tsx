import { useLocale } from "next-intl";
import { IServiceCardProps } from "./ServiceCard.types";

export default function ServiceCard({
	title,
	description,
	children,
}: IServiceCardProps) {
	const locale = useLocale();
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold text-primary">{title}</h2>
			<div
				className={`my-6 px-6 ${locale === "ar" ? "border-r-2" : "border-l-2"}`}
			>
				<div className="flex items-start gap-3">
					<i className="w-[0.6rem] h-[0.6rem] bg-primary rounded-[2px] mt-2 flex-shrink-0" />
					<p className="text-gray-800/70 font-semibold leading-relaxed">
						{description}
					</p>
				</div>
				{children}
			</div>
		</div>
	);
}
