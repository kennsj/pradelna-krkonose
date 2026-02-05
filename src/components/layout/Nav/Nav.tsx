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
				<Link to='/about' data-link-hidden='true'>
					<AnimatedButton>Poptávka</AnimatedButton>
				</Link>
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
					<Link to='/services' onClick={() => setMenuOpen(false)}>
						Služby
					</Link>
					<Link to='/references' onClick={() => setMenuOpen(false)}>
						Reference
					</Link>
					<Link to='/how-it-works' onClick={() => setMenuOpen(false)}>
						Jak to funguje
					</Link>
					<Link to='/contact' onClick={() => setMenuOpen(false)}>
						Kontakt
					</Link>
					<Link
						to='/about'
						data-link-hidden='true'
						onClick={() => setMenuOpen(false)}
					>
						<AnimatedButton>Poptávka</AnimatedButton>
					</Link>
				</div>
			)}
		</nav>
	)
}

export default Nav
