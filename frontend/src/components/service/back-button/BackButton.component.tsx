"use client";
import { useRouter } from "@/i18n/routing";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function BackButton() {
	const locale = useLocale();
	const router = useRouter();
	const t = useTranslations("service_details");
	const handleBackClick = () => {
		router.back();
	};
	return (
		<button
			onClick={handleBackClick}
			className="flex items-center gap-2 text-primary hover:text-primary-800 mb-8 transition-colors"
		>
			{locale === "ar" ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
			<span className="text-sm font-medium">{t("back")}</span>
		</button>
	);
}
