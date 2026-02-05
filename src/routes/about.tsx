import { createFileRoute } from "@tanstack/react-router"
import { AnimatedTextGroup } from "../components/ui/AnimatedTextGroup"
import Container from "../components/ui/Container/Container"
import Hero from "../components/layout/Hero/Hero"

export const Route = createFileRoute("/about")({
	component: About,
})

function About() {
	return (
		<>
			<Hero
				img='./img/cdb49f4f897889c109d06ae709eea2f5f2468a6f.webp'
				title='Prádelenský servis pro hotely, penziony a gastro provozy'
				subtitle='Každý provoz má jiné nároky na praní prádla. Níže najdete přehled řešení přizpůsobených konkrétním typům zařízení.'
			/>
			<main>
				<section
					style={{ maxWidth: "1260px", margin: "0 auto", padding: "2rem 3rem" }}
				>
					<Container
						overline='NAŠE HODNOTY'
						title='Kvalita, spolehlivost a starostlivost'
						imageUrl='/img/about-img.png'
						imageAlt='About image'
					>
						<AnimatedTextGroup>
							<p>
								Každý den se zaměřujeme na to, abychom vám poskytli nejlepší
								služby. Naše tým je vždy připraven pomoci a zajistit, aby vaše
								prádlo bylo zpracováno s péčí a pozorností.
							</p>
						</AnimatedTextGroup>
					</Container>
				</section>
			</main>
		</>
	)
}
