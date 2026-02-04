import type { ReactNode } from "react"
import styles from "./Hero.module.css"

type HeroProps = {
	img: string
	title: ReactNode
	subtitle: string
	link: string
}

const Hero = ({ img, title, subtitle, link }: HeroProps) => {
	return (
		<header className={styles.header}>
			<div className={styles["img-container"]}>
				<img src={img} alt={typeof title === "string" ? title : ""} />
				<div className={styles["img-overlay"]}></div>
			</div>
			<div className={styles["header-info"]}>
				<h1 className={styles.title}>{title}</h1>
				<p>{subtitle}</p>
				<a href={`/${link}`}>
					<button>{link}</button>
				</a>
			</div>
		</header>
	)
}

export default Hero
