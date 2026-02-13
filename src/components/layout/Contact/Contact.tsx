import Intro from "../../ui/Intro"
import styles from "./Contact.module.css"
import ContactForm from "./ContactForm"

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
				<ContactForm />
			</div>
		</div>
	)
}

export default Contact
