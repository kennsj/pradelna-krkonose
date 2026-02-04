import "./App.css"
import Services from "./components/layout/Services/Services"
import Feature from "./components/layout/Feature/Feature"
import Hero from "./components/layout/Hero/Hero"
import Clients from "./components/layout/Clients/Clients"
import Container from "./components/ui/Container/Container"
import Intro from "./components/ui/Intro"
import { Heading } from "./components/ui/Heading"

function App() {
	return (
		<>
			<header>
				<Hero
					img='./public/cdb49f4f897889c109d06ae709eea2f5f2468a6f.png'
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
				<section>
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
						<p>
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
					<div className='contact-info-container'>
						<div className='contact'>
							<Intro
								overline='KONTAKT'
								title='Máte zájem o spolupráci?'
								paragraph='Ozvěte se nám a domluvíme detaily podle potřeb vašeho provozu.'
								align='left'
							/>
							<p>
								Spolupráci nastavujeme individuálně a v souladu s hygienickými
								standardy provozního praní.
							</p>
							<div className='contact-info'>
								<div>
									<a href='tel:+420727839795'>
										<img src='./icons/phone.svg' alt='Phone icon' />
										<span>+420 727 839 795</span>
									</a>
								</div>
								<div>
									<a href='mailto:info@pradelnakrkonose.cz'>
										<img src='./icons/mail.svg' alt='Phone icon' />
										<span>info@pradelnakrkonose.cz</span>
									</a>
								</div>
								<div>
									<a href='#'>
										<img src='./icons/map.svg' alt='Location icon' />
										<span>Kpt. Jaroše 496, 543 01 Vrchlabí 1</span>
									</a>
								</div>
								<iframe
									width={400}
									height={300}
									style={{ borderRadius: "18px", border: "0" }}
									src='https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Kpt.%20Jaro%C5%A1e%20496%2C%20543%2001%20Vrchlab%C3%AD%201%2C%20Czechia&maptype=roadmap'
									allowFullScreen
								></iframe>
							</div>
						</div>
						<div className='contact-form'>
							<form>
								<div className='form-group'>
									<label>Typ provozu</label>
									<select required>
										<option value=''>Vyberte</option>
										<option value='hotel'>Hotel</option>
										<option value='pension'>Pension</option>
										<option value='restaurace'>Restaurace</option>
										<option value='chata'>Chata</option>
										<option value='jine'>Jiné</option>
									</select>
								</div>
								<div className='form-group'>
									<label>Jméno a příjmení</label>
									<input
										id='name'
										type='text'
										placeholder='Jan Novák'
										required
									/>
								</div>
								<div className='form-row'>
									<div className='form-group'>
										<label>Telefon</label>
										<input
											id='phone'
											type='tel'
											placeholder='+420 77x xxx xxx'
											required
										/>
									</div>
									<div className='form-group'>
										<label>Email</label>
										<input
											id='email'
											type='email'
											placeholder='novak@email.com'
											required
										/>
									</div>
								</div>
								<div className='form-group'>
									<label>Poznámka</label>
									<textarea
										placeholder='Objčem, velikost zařízení...'
										required
									></textarea>
								</div>
								<div className='form-footer'>
									<div>
										<button type='submit'>Odeslat poptávku</button>
										<a href='tel:+420727839795'>Raději voláte?</a>
									</div>
									<p>Ozveme se do 24 hodin. Bez zbytečných...</p>
								</div>
							</form>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default App
