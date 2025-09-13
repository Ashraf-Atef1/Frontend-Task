import OurTeam from "@/components/home/our-team/OurTeam.component";
import OurClients from "@/components/home/our-clients/OurClients.component";
import Hero from "@/components/shared/hero";

export default function Home() {
	return (
		<main>
			<Hero />
			<OurTeam />
			<OurClients />
		</main>
	);
}
