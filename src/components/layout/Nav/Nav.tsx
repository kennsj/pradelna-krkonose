import { useState } from "react"
import styles from "./Nav.module.css"
import { AnimatedButton } from "../../ui/AnimatedButton"

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<nav className={styles.nav}>
			<a href='/' className={styles.logo} data-link-hidden='true'>
				<img src='./logo.svg' alt='Prádelna logo' />
			</a>
			<div className={styles.links}>
				<a href='/#'>Služby</a>
				<a href='/#'>Reference</a>
				<a href='/#'>Jak to funguje</a>
				<a href='/#'>Kontakt</a>
				<AnimatedButton>Poptávka</AnimatedButton>
			</div>
			<button
				className={`${styles["mobile-menu-btn"]} ${menuOpen ? styles.active : ""}`}
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label='Toggle menu'
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
			{menuOpen && (
				<div className={styles["mobile-menu"]}>
					<a href='/#' onClick={() => setMenuOpen(false)}>
						Služby
					</a>
					<a href='/#' onClick={() => setMenuOpen(false)}>
						Reference
					</a>
					<a href='/#' onClick={() => setMenuOpen(false)}>
						Jak to funguje
					</a>
					<a href='/#' onClick={() => setMenuOpen(false)}>
						Kontakt
					</a>
					<AnimatedButton onClick={() => setMenuOpen(false)}>
						Poptávka
					</AnimatedButton>
				</div>
			)}
		</nav>
	)
}

export default Nav
