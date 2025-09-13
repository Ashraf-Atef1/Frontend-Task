import { useLocale, useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import { useRouter } from "@/i18n/routing";
import { useState } from "react";
export default function SearchBar() {
	const t = useTranslations("header");
	const locale = useLocale();
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");
	const [isExpanded, setIsExpanded] = useState(false);
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchTerm.trim() === "") return setIsExpanded((prev) => !prev);
		setSearchTerm("");
		router.push(`/search`);
		setIsExpanded((prev) => !prev);
	};
	const handleOnClick = () => {
		if (searchTerm.trim() === "") return setIsExpanded((prev) => !prev);
		setSearchTerm("");
		router.push(`/search`);
		setIsExpanded((prev) => !prev);
	};
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};
	return (
		<div className={styles["search-container"]}>
			<form className="max-lg:hidden" onSubmit={handleSubmit}>
				<input
					className={`${styles["search"]} ${
						styles[locale === "ar" ? "expandleft" : "expandright"]
					} ${isExpanded ? styles["active"] : ""}`}
					id="searchright"
					type="search"
					name="q"
					placeholder={t("search_placeholder")}
					onChange={handleOnChange}
					value={searchTerm}
				/>
				<label
					className={`${styles["button"]} ${styles["searchbutton"]}`}
					htmlFor="searchright"
					onClick={handleOnClick}
					role="button"
				>
					<span className={styles["mglass"]}>&#9906;</span>
				</label>
			</form>
			<form className="lg:hidden flex w-full" onSubmit={handleSubmit}>
				<input
					className="border p-1 text-black flex-1 w-full"
					id="searchright"
					type="search"
					name="q"
					placeholder={t("search_placeholder")}
					onChange={handleOnChange}
					value={searchTerm}
				/>
				<label
					className="bg-primary py-2 px-4 cursor-pointer text-secondary"
					htmlFor="searchright"
					onClick={handleOnClick}
					role="button"
				>
					<span className={`${styles["mglass"]} `}>&#9906;</span>
				</label>
			</form>
		</div>
	);
}
