import TeamServices from "@/components/search-result/team-services/TeamServices.component";
import Hero from "@/components/shared/hero";

interface ISearchPageProps {
	searchParams: Promise<{
		q?: string;
	}>;
}

export default async function SearchPage({ searchParams }: ISearchPageProps) {
	return (
		<main>
			<Hero />
			<TeamServices searchQuery={(await searchParams).q} />
		</main>
	);
}
