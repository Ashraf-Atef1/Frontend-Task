import { useTranslations } from "next-intl";
import ServiceCard from "./service-card/ServiceCard.component";
import BackButton from "./back-button/BackButton.component";

export default function ServiceComponent() {
	const t = useTranslations("service_details");

	return (
		<div className="max-w-4xl mx-auto px-4 py-8">
			<BackButton />
			<div className="space-y-8">
				<h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
					{t("title")}
				</h1>

				<div className="text-black/70 leading-relaxed">
					<p>{t("introduction")}</p>
				</div>
				<ServiceCard
					title={t("card_1_title")}
					description={t("card_1_description")}
				/>

				<ServiceCard
					title={t("card_2_title")}
					description={t("card_2_description")}
				>
					<div className="ml-5">
						<p className="text-gray-800/70 font-medium my-3">
							{t("card_2_subtitle")}
						</p>
						<div className="space-y-2 text-gray-800/70">
							<div className="flex items-start gap-2">
								<span className="text-gray-400">-</span>
								<span>{t("card_2_list_1")}</span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-gray-400">-</span>
								<span>{t("card_2_list_2")}</span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-gray-400">-</span>
								<span>{t("card_2_list_3")}</span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-gray-400">-</span>
								<span>{t("card_2_list_4")}</span>
							</div>
						</div>
					</div>
				</ServiceCard>

				<ServiceCard
					title={t("card_3_title")}
					description={t("card_3_description")}
				>
					<div className="ml-5 mt-3">
						<div className="space-y-2 text-gray-800/70">
							<div className="flex items-start gap-2">
								<span className="text-gray-400">-</span>
								<span>{t("card_3_list_1")}</span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-gray-400">-</span>
								<span>{t("card_3_list_2")}</span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-gray-400">-</span>
								<span>{t("card_3_list_3")}</span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-gray-400">-</span>
								<span>{t("card_3_list_4")}</span>
							</div>
						</div>
					</div>
				</ServiceCard>
				<div className="text-gray-800/70 leading-relaxed pt-4">
					<p>{t("conclusion")}</p>
				</div>
			</div>
		</div>
	);
}
