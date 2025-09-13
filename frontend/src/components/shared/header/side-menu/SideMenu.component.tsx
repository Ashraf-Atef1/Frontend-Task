import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HiOutlineMenu } from "react-icons/hi";
import { headerLinks } from "../Header.data";
import MenuLink from "../menu-link/MenuLink.component";
import { Button } from "@/components/ui/button";
import SearchBar from "../search-bar/SearchBar.component";
import { useTranslations } from "next-intl";

export default function SideMenu() {
	const t = useTranslations("header");
	return (
		<Sheet>
			<SheetTrigger className="cursor-pointer">
				<HiOutlineMenu size={24} />
			</SheetTrigger>
			<SheetContent className="flex flex-col gap-8 justify-center h-full p-8 lg:hidden">
				<SearchBar />
				<ul className="flex flex-col gap-4 text-xs lg:text-base font-semibold lg:hidden">
					{headerLinks.map(({ href, label, nestedLinks }, index) => (
						<MenuLink
							key={index}
							href={href}
							label={label}
							nestedLinks={nestedLinks}
						/>
					))}
				</ul>
				<Button className="bg-primary cursor-pointer">
					{t("bookAppointment")}
				</Button>
			</SheetContent>
		</Sheet>
	);
}
