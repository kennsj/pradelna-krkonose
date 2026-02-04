import styles from "./Nav.module.css"

const Nav = () => {
	return (
		<nav className={styles.nav}>
			<a href='/'>
				<img src='./logo.svg' alt='Prádelna logo' />
			</a>
			<div className={styles.links}>
				<a href='/#'>Služby</a>
				<a href='/#'>Reference</a>
				<a href='/#'>Jak to funguje</a>
				<a href='/#'>Kontakt</a>
				<button>Nezavazna poptavka</button>
			</div>
		</nav>
	)
}

export default Nav
