"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function HeaderLink({
	href,
	label,
	nestedLinks,
}: IHeaderLinkProps) {
	const [isOpen, setIsOpen] = useState(false);
	const t = useTranslations("header");
	if (href && (!nestedLinks || nestedLinks.length === 0)) {
		return (
			<li>
				<Link href={href} className="hover:underline">
					{t(label)}
				</Link>
			</li>
		);
	}
	return (
		<li>
			<button
				className="hover:underline flex items-center gap-1 cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			>
				{t(label)}{" "}
				<IoIosArrowDown
					className={`transition-transform duration-200 ${
						isOpen ? "rotate-180" : ""
					}`}
				/>
			</button>
			{isOpen && nestedLinks && nestedLinks.length > 0 && (
				<>
					<span
						className="absolute top-0 left-0 right-0 w-full h-screen block bottom-0"
						onClick={() => setIsOpen(false)}
					/>
					<ul className="absolute top-[100%] left-4 right-4 bg-primary p-6 rounded-b-2xl grid grid-cols-4 gap-4 shadow-lg">
						{nestedLinks.map(({ href, label }) => (
							<li key={href}>
								<Link href={href} className="hover:underline">
									{t(label)}
								</Link>
							</li>
						))}
					</ul>
				</>
			)}
		</li>
	);
}
