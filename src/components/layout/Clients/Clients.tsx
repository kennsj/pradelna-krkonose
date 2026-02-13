import Intro from "../../ui/Intro"
import styles from "./Clients.module.css"
import { useScrollReveal } from "../../../hooks/useScrollReveal"
import { AnimatedParagraph } from "../../ui/AnimatedParagraph"

const Clients = () => {
	const gridRef = useScrollReveal({
		selector: `.${styles.card}`,
		yPercent: 10,
		opacity: 0.8,
		stagger: 0.1,
	})

	return (
		<div>
			<Intro
				overline='PRO KOHO'
				title='Pracujeme s provozy, kde je spolehlivost klíčová'
				align='center'
				centered={true}
				dataWidth='narrow'
			/>
			<div
				className={styles.grid}
				ref={gridRef as React.RefObject<HTMLDivElement>}
			>
				<ClientCard
					img='./img/1.webp'
					paragraph='Hotely a wellness'
					link='Zobrazit detail'
					url='#'
				/>
				<ClientCard
					img='./img/2.webp'
					paragraph='Penziony a apartmány'
					link='Zobrazit detail'
					url='#'
				/>
				<ClientCard
					img='./img/3.webp'
					paragraph='Horské chaty a chalupy'
					link='Zobrazit detail'
					url='#'
				/>
				<ClientCard
					img='./img/4.webp'
					paragraph='Restaurace a gastro provozy'
					link='Zobrazit detail'
					url='#'
				/>
			</div>
		</div>
	)
}

export default Clients

type ClientCardProps = {
	img: string
	paragraph: string
	link: string
	url: string
}

const ClientCard = ({ img, paragraph, link, url }: ClientCardProps) => {
	return (
		<a href={url} data-link-hidden='true'>
			<div className={styles.card}>
				<img src={img} alt='Client Logo' />
				<div className={styles["img-overlay"]}></div>
				<div className={styles["card-info"]}>
					<AnimatedParagraph>{paragraph}</AnimatedParagraph>
					<span>{link}</span>
				</div>
			</div>
		</a>
	)
}
