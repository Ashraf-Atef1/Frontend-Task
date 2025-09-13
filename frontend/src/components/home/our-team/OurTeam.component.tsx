import { IOurTeamProps } from "./OurTeam.types";
import styles from "./styles.module.css";
import OurTeamCarousel from "./our-team-carousel/OurTeamCarousel.component";
import { getTeamMembers } from "@/lib/api/ourTeam.route";
import { getLocale, getTranslations } from "next-intl/server";

export default async function OurTeam({ className = "" }: IOurTeamProps) {
	const t = await getTranslations("our_team");
	const ourTeamData = await getTeamMembers();

	return (
		<section className={`${styles.ourTeamSection} ${className}`}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>{t("title")}</h2>
					<p className={styles.description}>{t("description")}</p>
				</div>
				<OurTeamCarousel members={ourTeamData} />
			</div>
		</section>
	);
}
