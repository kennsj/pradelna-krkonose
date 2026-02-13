import { useState } from "react"
import { Link } from "@tanstack/react-router"
import styles from "./Nav.module.css"
import { AnimatedButton } from "../../ui/AnimatedButton"

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<nav className={styles.nav} style={{ position: "relative", zIndex: 10000 }}>
			<Link to='/' className={styles.logo} data-link-hidden='true'>
				<img src='./logo.svg' alt='Prádelna logo' />
			</Link>
			<div className={styles.links}>
				<Link to='/services'>Služby</Link>
				<Link to='/references'>Reference</Link>
				<Link to='/how-it-works'>Jak to funguje</Link>
				<Link to='/contact'>Kontakt</Link>
				<AnimatedButton url='#' className={styles["nav-button"]}>
					Poptávka
				</AnimatedButton>
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
					<Link
						className={styles["mobile-menu-link"]}
						to='/services'
						onClick={() => setMenuOpen(false)}
						data-link-hidden='true'
					>
						Služby
					</Link>
					<Link
						className={styles["mobile-menu-link"]}
						to='/references'
						onClick={() => setMenuOpen(false)}
						data-link-hidden='true'
					>
						Reference
					</Link>
					<Link
						className={styles["mobile-menu-link"]}
						to='/how-it-works'
						onClick={() => setMenuOpen(false)}
						data-link-hidden='true'
					>
						Jak to funguje
					</Link>
					<Link
						className={styles["mobile-menu-link"]}
						to='/contact'
						onClick={() => setMenuOpen(false)}
						data-link-hidden='true'
					>
						Kontakt
					</Link>

					<AnimatedButton
						className={styles["nav-button"]}
						url='#'
						onClick={() => setMenuOpen(false)}
					>
						Poptávka
					</AnimatedButton>
				</div>
			)}
		</nav>
	)
}

export default Nav
