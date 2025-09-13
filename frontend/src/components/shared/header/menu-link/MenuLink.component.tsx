"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function MenuLink({ href, label, nestedLinks }: IMenuLinkProps) {
	const t = useTranslations("header");
	if (href && (!nestedLinks || nestedLinks.length === 0)) {
		return (
			<li>
				<Link href={href} className="hover:underline text-stone-900 text-sm">
					{t(label)}
				</Link>
			</li>
		);
	}
	return (
		<li>
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger className="text-stone-900 p-0 text-sm">
						{t(label)}
					</AccordionTrigger>
					<AccordionContent>
						<ul className="flex flex-col gap-2 pl-2 text-sm mt-4">
							{nestedLinks?.map(({ href, label }) => (
								<li key={href}>
									<Link href={href} className="hover:underline text-stone-900">
										{t(label)}
									</Link>
								</li>
							))}
						</ul>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</li>
	);
}
