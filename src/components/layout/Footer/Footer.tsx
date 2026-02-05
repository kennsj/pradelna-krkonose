import { Link } from "@tanstack/react-router"
import styles from "./Footer.module.css"

const Footer = () => {
	return (
		<footer className={styles["footer-container"]}>
			<div className={styles.footer}>
				<div className={styles["footer-info"]}>
					<Link to='/' data-link-hidden='true'>
						<img src='/logo-white.svg' alt='Logo Prádelna' />
					</Link>
					<p>
						Spolupracujeme v souladu s hygienickými standardy provozního praní.
					</p>
				</div>
				<div className={styles["quick-links"]}>
					<h4>Rychlá navigace</h4>

					<Link to='/services'>Služby</Link>
					<Link to='/types'>Typy provozů</Link>
					<Link to='/how-it-works'>Jak to funguje</Link>
					<Link to='/contact'>Kontakt</Link>
				</div>
				<div className={styles["contact-info"]}>
					<h4>Kontakt</h4>
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
						<Link to='/' data-link-hidden='true'>
							<img src='./icons/map.svg' alt='Location icon' />
							<span>Kpt. Jaroše 496, 543 01 Vrchlabí 1</span>
						</Link>
					</div>
					<div className={styles["social-info"]}>
						<h4>Sledujte nás</h4>
						<div>
							<a href='https://facebook.com' data-link-hidden='true'>
								<img src='./icons/fb.svg' alt='Facebook icon' />
							</a>
							<a href='https://linkedin.com' data-link-hidden='true'>
								<img src='./icons/linkedin.svg' alt='LinkedIn icon' />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className={styles["footer-bottom"]}>
				<span>© {new Date().getFullYear()} Prádelna Krkonoše</span>
				<span>
					<Link to='/privacy'>Ochrana osobních údajů</Link>
				</span>
				<span>
					<Link to='/cookies'>Cookies</Link>
				</span>
				<span>
					Tvorba webových stránek: <br />{" "}
					<a href='https://jonasrech.cz'>Jonáš Rech</a>
				</span>
			</div>
		</footer>
	)
}

export default Footer
