import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

export default function LanguageSelect() {
	const pathname = usePathname();
	const router = useRouter();
	const locale = useLocale();
	const params = useParams();

	const handleChange = (locale: string) => {
		router.replace({ pathname, query: params }, { locale });
	};
	return (
		<Select onValueChange={handleChange} value={locale}>
			<SelectTrigger className=" !text-secondary w-fit border-none outline-none rounded-none cursor-pointer shadow-none">
				<SelectValue placeholder="EN" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem className="cursor-pointer" value="en">
					EN
				</SelectItem>
				<SelectItem className="cursor-pointer" value="ar">
					AR
				</SelectItem>
			</SelectContent>
		</Select>
	);
}
