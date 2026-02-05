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
			<div className={styles.grid} ref={gridRef as React.RefObject<HTMLDivElement>}>
				<ClientCard
					img='./img/1.png'
					paragraph='Hotely a wellness'
					link='Zobrazit detail'
					url='#'
				/>
				<ClientCard
					img='./img/2.png'
					paragraph='Penziony a apartmány'
					link='Zobrazit detail'
					url='#'
				/>
				<ClientCard
					img='./img/3.png'
					paragraph='Horské chaty a chalupy'
					link='Zobrazit detail'
					url='#'
				/>
				<ClientCard
					img='./img/4.png'
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
		<a href={url}>
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
