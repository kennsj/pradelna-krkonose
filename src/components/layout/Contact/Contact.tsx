import Intro from "../../ui/Intro"
import styles from "./Contact.module.css"
import { AnimatedButton } from "../../ui/AnimatedButton"

const Contact = () => {
	return (
		<div className={styles["contact-info-container"]}>
			<div className={styles.contact}>
				<Intro
					overline='KONTAKT'
					title='Máte zájem o spolupráci?'
					paragraph='Ozvěte se nám a domluvíme detaily podle potřeb vašeho provozu.'
					align='left'
					animate={false}
				/>
				<p>
					Spolupráci nastavujeme individuálně a v souladu s hygienickými
					standardy provozního praní.
				</p>
				<div className={styles["contact-info"]}>
					<div>
						<a href='tel:+420727839795' data-link-hidden='true'>
							<img src='./icons/phone.svg' alt='Phone icon' />
							<span>+420 727 839 795</span>
						</a>
					</div>
					<div>
						<a href='mailto:info@pradelnakrkonose.cz' data-link-hidden='true'>
							<img src='./icons/mail.svg' alt='Phone icon' />
							<span>info@pradelnakrkonose.cz</span>
						</a>
					</div>
					<div>
						<a href='#' data-link-hidden='true'>
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
			<div className={styles["contact-form"]}>
				<form>
					<div className={styles["form-group"]}>
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
					<div className={styles["form-group"]}>
						<label>Jméno a příjmení</label>
						<input id='name' type='text' placeholder='Jan Novák' required />
					</div>
					<div className={styles["form-row"]}>
						<div className={styles["form-group"]}>
							<label>Telefon</label>
							<input
								id='phone'
								type='tel'
								placeholder='+420 77x xxx xxx'
								required
							/>
						</div>
						<div className={styles["form-group"]}>
							<label>Email</label>
							<input
								id='email'
								type='email'
								placeholder='novak@email.com'
								required
							/>
						</div>
					</div>
					<div className={styles["form-group"]}>
						<label>Poznámka</label>
						<textarea
							placeholder='Objčem, velikost zařízení...'
							required
						></textarea>
					</div>
					<div className={styles["form-footer"]}>
						<div>
							<AnimatedButton type='submit'>Odeslat poptávku</AnimatedButton>
							<a href='tel:+420727839795' data-link-hidden='true'>
								Raději voláte?
							</a>
						</div>
						<p>Ozveme se do 24 hodin. Bez zbytečných...</p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Contact
