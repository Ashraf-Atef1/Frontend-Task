import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function BookButton() {
	const t = useTranslations("header");
	return (
		<Button className="bg-transparent text-secondary hover:bg-secondary hover:text-primary border border-secondary">
			{t("bookAppointment")}
		</Button>
	);
}
