"use client";

import { IFooterProps } from "./Footer.types";
import { footerSections, socialLinks } from "./Footer.data";
import SubscriptionForm from "./subscription-form/SubscriptionForm.component";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer({ className = "" }: IFooterProps) {
	const t = useTranslations("footer");
	const handleLinkClick = (href: string, isExternal?: boolean) => {
		if (isExternal) {
			window.open(href, "_blank", "noopener,noreferrer");
		}
	};

	const handleSocialClick = (href: string) => {
		// window.open(href, "_blank", "noopener,noreferrer");
	};

	return (
		<footer className={`bg-primary text-white ${className}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="py-8 border-b border-white/30">
					<div
						className={`flex flex-col lg:flex-row justify-between items-center gap-8`}
					>
						<div className={`flex-1 text-left`}>
							<SubscriptionForm />
						</div>

						<div className={`flex items-center gap-8`}>
							<div className={`text-left`}>
								<h3 className="text-lg font-medium text-white">
									{t("contacts")}
								</h3>
							</div>

							<div className={`flex items-center gap-4`}>
								{socialLinks.map((social) => {
									const IconComponent = social.icon;
									return (
										<button
											key={social.id}
											onClick={() => handleSocialClick(social.href)}
											className="w-10 h-10 rounded-full hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
											aria-label={`Follow us on ${social.name}`}
										>
											<IconComponent size={18} />
										</button>
									);
								})}
							</div>
						</div>
					</div>
				</div>

				<div className="py-8">
					<div
						className={`flex flex-col lg:flex-row justify-between items-center gap-6`}
					>
						<div
							className={`flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4`}
						>
							{footerSections.map((section) => (
								<div
									key={section.id}
									className={`flex flex-wrap gap-x-6 gap-y-2`}
								>
									{section.links.map((link) => (
										<div key={link.id}>
											{link.isExternal ? (
												<button
													onClick={() =>
														handleLinkClick(link.href, link.isExternal)
													}
													className="text-secondary hover:text-amber-200 transition-colors duration-200 text-sm"
												>
													{t(link.label)}
												</button>
											) : (
												<Link
													href={link.href}
													className="text-secondary hover:text-amber-200 transition-colors duration-200 text-sm"
												>
													{t(link.label)}
												</Link>
											)}
										</div>
									))}
								</div>
							))}
						</div>
						<div className={`text-secondary text-sm`}>{t("copyright")}</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
