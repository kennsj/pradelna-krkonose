import styles from "./Footer.module.css"

const Footer = () => {
	return (
		<footer className={styles["footer-container"]}>
			<div className={styles.footer}>
				<div className={styles["footer-info"]}>
					<img src='/logo-white.svg' alt='Logo Prádelna' />
					<p>
						Spolupracujeme v souladu s hygienickými standardy provozního praní.
					</p>
				</div>
				<div className={styles["quick-links"]}>
					<h4>Rychlá navigace</h4>

					<a href='#'>Služby</a>
					<a href='#'>Typy provozů</a>
					<a href='#'>Jak to funguje</a>
					<a href='#'>Kontakt</a>
				</div>
				<div className={styles["contact-info"]}>
					<h4>Kontakt</h4>
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
				</div>
				<div className={styles["social-media"]}>
					<h4>Sledujte nás</h4>
					<div>
						<img src='./icons/fb.svg' alt='Facebook icon' />
						<img src='./icons/linkedin.svg' alt='LinkedIn icon' />
					</div>
				</div>
			</div>
			<div className={styles["footer-bottom"]}>
				<span>© {new Date().getFullYear()} Prádelna Krkonoše</span>
				<span>Ochrana osobních údajů</span>
				<span>
					<a href='#'>Cookies</a>
				</span>
				<span>
					Tvorba webových stránek: <a href='#'>Jonáš Rech</a>
				</span>
			</div>
		</footer>
	)
}

export default Footer
