import { createFileRoute } from "@tanstack/react-router"
import { AnimatedTextGroup } from "../components/ui/AnimatedTextGroup"
import Container from "../components/ui/Container/Container"
import Hero from "../components/layout/Hero/Hero"
import { AnimatedButton } from "../components/ui/AnimatedButton"

export const Route = createFileRoute("/about")({
	component: About,
})

function About() {
	return (
		<>
			<Hero
				img='./img/about-page.webp'
				title='Prádelenský servis pro hotely, penziony a gastro provozy'
				subtitle='Každý provoz má jiné nároky na praní prádla. Níže najdete přehled řešení přizpůsobených konkrétním typům zařízení.'
			/>
			<main>
				<section>
					<Container
						title='Hotely a wellness'
						imageUrl='/img/about-img.png'
						imageAlt='About image'
						contentOnRight={true}
					>
						<AnimatedTextGroup>
							<p>
								Pro hotely a wellness provozy zajišťujeme pravidelný a
								spolehlivý prádelenský servis s důrazem na kvalitu, hygienu a
								přesné termíny.
							</p>
							<p>
								Postaráme se o ložní prádlo, ručníky, osušky i župany. Praní i
								mandlování probíhá v souladu s hygienickými standardy provozního
								praní. Služby umíme plynule navýšit v sezónních špičkách podle
								obsazenosti.
							</p>
							<p className='bold'>Typicky řešíme:</p>
							<ul>
								<li>Praní a mandlování ložního prádla</li>
								<li>Praní ručníků, osušek a županů</li>
								<li>Pravidelný svoz a rozvoz prádla</li>
							</ul>
							<a href='#' data-link-hidden='true'>
								<AnimatedButton data-dark-bg={true}>Poptávka</AnimatedButton>
							</a>
						</AnimatedTextGroup>
					</Container>
				</section>
				<section data-fullwidth data-background>
					<Container
						title='Penziony a apartmány'
						imageUrl='/img/about-img.png'
						imageAlt='About image'
					>
						<AnimatedTextGroup>
							<p>
								Penzionům a apartmánům nabízíme flexibilní spolupráci, která se
								přizpůsobuje velikosti provozu i sezónnosti.
							</p>
							<p>
								Zajišťujeme praní a mandlování prádla bez nutnosti vlastního
								zázemí. Frekvence svozu i rozsah služeb se vždy nastavují
								individuálně, bez zbytečné administrativy.
							</p>
							<p className='bold'>Typicky řešíme:</p>
							<ul>
								<li>
									<p>Praní a mandlování ložního prádla</p>
								</li>
								<li>Praní ručníků, osušek a županů</li>
								<li>Pravidelný svoz a rozvoz prádla</li>
							</ul>
						</AnimatedTextGroup>
					</Container>
				</section>
				<section>
					<Container
						title='Hotely a wellness'
						imageUrl='/img/about-img.png'
						imageAlt='About image'
						contentOnRight={true}
					>
						<AnimatedTextGroup>
							<p>
								Pro hotely a wellness provozy zajišťujeme pravidelný a
								spolehlivý prádelenský servis s důrazem na kvalitu, hygienu a
								přesné termíny.
							</p>
							<p>
								Postaráme se o ložní prádlo, ručníky, osušky i župany. Praní i
								mandlování probíhá v souladu s hygienickými standardy provozního
								praní. Služby umíme plynule navýšit v sezónních špičkách podle
								obsazenosti.
							</p>
							<p className='bold'>Typicky řešíme:</p>
							<ul>
								<li>Praní a mandlování ložního prádla</li>
								<li>Praní ručníků, osušek a županů</li>
								<li>Pravidelný svoz a rozvoz prádla</li>
							</ul>
							<a href='#' data-link-hidden='true'>
								<AnimatedButton data-dark-bg={true}>Poptávka</AnimatedButton>
							</a>
						</AnimatedTextGroup>
					</Container>
				</section>
			</main>
		</>
	)
}
