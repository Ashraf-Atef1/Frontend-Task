import Image from "next/image";
import { FaWhatsapp, FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import styles from "../styles.module.css";
import { ITeamMemberData } from "@/lib/api/types/ourTeam.types";

interface ITeamMemberCardProps {
	member: ITeamMemberData;
}

export default function TeamMemberCard({ member }: ITeamMemberCardProps) {
	const handleSocialClick = (type: string, value: string) => {
		switch (type) {
			case "whatsapp":
				window.open(`https://wa.me/${value.replace(/\+/g, "")}`, "_blank");
				break;
			case "phone":
				window.open(`tel:${value}`, "_self");
				break;
			case "email":
				window.open(`mailto:${value}`, "_self");
				break;
			case "linkedin":
				window.open(value, "_blank");
				break;
			default:
				break;
		}
	};

	return (
		<div className="flex flex-col items-center justify-between gap-3 overflow-hidden min-h-[350px] min-w-[250px]">
			<div className="overflow-hidden relative w-full aspect-[1/1] pb-[100%]">
				{member.photo?.url && (
					<Image
						src={member.photo?.url}
						alt={member.name}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
						priority={false}
					/>
				)}
			</div>
			<h3 className={styles.memberName}>{member.name}</h3>

			<p className="text-secondary-700 text-lg leading-loose font-semibold">
				{member.role}
			</p>

			<div className={styles.socialLinks}>
				{member.whatsapp && (
					<button
						onClick={() => handleSocialClick("whatsapp", member.whatsapp!)}
						className={`${styles.socialLink} ${styles.whatsapp}`}
						aria-label={`WhatsApp ${member.name}`}
					>
						<FaWhatsapp size={24} />
					</button>
				)}

				{member.phone && (
					<button
						onClick={() => handleSocialClick("phone", member.phone)}
						className={`${styles.socialLink} ${styles.phone}`}
						aria-label={`Call ${member.name}`}
					>
						<FaPhone size={24} />
					</button>
				)}

				{member.email && (
					<button
						onClick={() => handleSocialClick("email", member.email!)}
						className={`${styles.socialLink} ${styles.email}`}
						aria-label={`Email ${member.name}`}
					>
						<FaEnvelope size={24} />
					</button>
				)}

				{member.linkedIn && (
					<button
						onClick={() => handleSocialClick("linkedin", member.linkedIn!)}
						className={`${styles.socialLink} ${styles.linkedin}`}
						aria-label={`LinkedIn ${member.name}`}
					>
						<FaLinkedin size={24} />
					</button>
				)}
			</div>
		</div>
	);
}
