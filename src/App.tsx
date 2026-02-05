import "./App.css"
import Services from "./components/layout/Services/Services"
import Feature from "./components/layout/Feature/Feature"
import Hero from "./components/layout/Hero/Hero"
import Clients from "./components/layout/Clients/Clients"
import Container from "./components/ui/Container/Container"
import Intro from "./components/ui/Intro"
import { Heading } from "./components/ui/Heading"
import Contact from "./components/layout/Contact/Contact"

function App() {
	return (
		<>
			<header>
				<Hero
					img='./img/cdb49f4f897889c109d06ae709eea2f5f2468a6f.webp'
					title={
						<>
							Čisté prádlo <span className='highlight'>včas</span>. <br />I v{" "}
							<span className='highlight'>plné</span> sezóně.
						</>
					}
					subtitle='Profesionální prádelenský servis pro hotely, penziony a gastro provozy v Krkonoších. Prádlo čistíme v souladu s hygienickými standardy provozního praní.'
					link='Nezávazná poptávka'
				/>
				<Feature
					features={[
						"Svoz a rozvoz bez starostí",
						"Pravidelné a sezónní zakázky",
						"Dodržování hygienických standardů",
					]}
				/>
			</header>
			<main>
				<section>
					<Clients />
				</section>
				<section>
					<Services />
				</section>

				<section data-background data-fullwidth>
					<Container
						overline='NÁS'
						title='Lokální prádelna, na kterou se můžete spolehnout'
						imageUrl='/img/about-img.png'
						imageAlt='About image'
					>
						<p>
							Jsme profesionální prádelna v Krkonoších, která zajišťuje praní a
							mandlování prádla pro hotely, penziony, horské chaty, restaurace a
							další provozy.
						</p>
						<p className='bold'>
							Prádlo zpracováváme v souladu s hygienickými standardy, s důrazem
							na kvalitu a spolehlivost.
						</p>
						<p>
							Nabízíme pravidelnou, sezónní i nárazovou spolupráci podle potřeb
							konkrétního provozu.
						</p>
						<a href=''>
							<button>Nezávazná poptávka</button>
						</a>
					</Container>
				</section>
				<section>
					<div className='how-it-works'>
						<div>
							<Intro
								overline='JAK TO FUNGUJE'
								title='Jak probíhá spolupráce krok za krokem?'
								paragraph='Vše nastavíme tak, aby vás provoz prádla nezdržoval ani v plné sezóně.'
								align='left'
							/>
							<div className='steps'>
								<div className='step'>
									<span className='step-number'>01</span>
									<div>
										<h4 className='step-title'>Nezávazná poptávka</h4>
										<p className='step-text'>
											Vyplňte krátký formulář nebo nám zavolejte. Ozveme se a
											domluvíme detaily podle vašeho provozu.
										</p>
									</div>
								</div>
								<div className='step'>
									<span className='step-number'>02</span>
									<div>
										<h4 className='step-title'>Nastavení spolupráce</h4>
										<p className='step-text'>
											Společně nastavíme rozsah služeb, frekvenci svozu, sezónní
											kapacitu. Vše jasně, bez složitých smluv.
										</p>
									</div>
								</div>
								<div className='step'>
									<span className='step-number'>03</span>
									<div>
										<h4 className='step-title'>Pravidelný svoz a praní</h4>
										<p className='step-text'>
											Prádlo profesionálně vypereme a připravíme k použití v
											souladu s hygienickými standardy.
										</p>
									</div>
								</div>
								<div className='step'>
									<span className='step-number'>04</span>
									<div>
										<h4 className='step-title'>Včasné dodání zpět</h4>
										<p className='step-text'>
											Čisté prádlo dorazí zpět přesně podle domluvy. Vy se
											mezitím můžete věnovat hostům.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='img-container'>
							<img src='/img/dryer.png' alt='How it works image' />
						</div>
					</div>
				</section>
				<section className='full-width'>
					<div className='background'>
						<Heading as='h2'>
							Nejste si jistí, jaký rozsah služeb je pro vás ideální?
						</Heading>
						<a href='#'>
							<button>Nezávazná poptávka</button>
						</a>
					</div>
				</section>
				<section>
					<Contact />
				</section>
			</main>
		</>
	)
}

export default App
