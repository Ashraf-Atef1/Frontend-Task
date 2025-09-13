"use client";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { headerLinks } from "./Header.data";
import HeaderLink from "./header-link/HeaderLink.component";
import LanguageSelect from "./language-select/LanguageSelect.component";
import BookButton from "./book-button/BookButton.component";
import SearchBar from "./search-bar/SearchBar.component";
import SideMenu from "./side-menu/SideMenu.component";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<header
			className={`text-secondary fixed z-20 top-0 transition-all duration-300 w-full ${
				isScrolled ? "bg-primary shadow-md" : "bg-transparent "
			}`}
		>
			<nav
				className="p-4 relative flex justify-between items-center min-h-[71px]"
				data-headlessui-state=""
			>
				<Link href="/">
					<Image loading="eager" src={Logo} alt="Logo" height={50} />
				</Link>
				<ul className="hidden gap-4 text-xs lg:text-base font-semibold lg:flex">
					{headerLinks.map(({ href, label, nestedLinks }, index) => (
						<HeaderLink
							key={index}
							href={href}
							label={label}
							nestedLinks={nestedLinks}
						/>
					))}
				</ul>
				<div className="hidden gap-2 items-center lg:flex">
					<SearchBar />
					<LanguageSelect />
					<BookButton />
				</div>
				<div className="flex gap-2 items-center lg:hidden">
					<LanguageSelect />
					<SideMenu />
				</div>
			</nav>
		</header>
	);
}
