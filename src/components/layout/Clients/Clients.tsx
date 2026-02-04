import Intro from "../../ui/Intro"
import styles from "./Clients.module.css"

const Clients = () => {
	return (
		<div>
			<Intro
				overline='PRO KOHO'
				title='Pracujeme s provozy, kde je spolehlivost klíčová'
				align='center'
				centered={true}
			/>
			<div className={styles.grid}>
				<ClientCard img='./img/1.png' paragraph='Test' link='Test' />
				<ClientCard img='./img/2.png' paragraph='Test' link='Test' />
				<ClientCard img='./img/3.png' paragraph='Test' link='Test' />
				<ClientCard img='./img/4.png' paragraph='Test' link='Test' />
			</div>
		</div>
	)
}

export default Clients

type ClientCardProps = {
	img: string
	paragraph: string
	link: string
}

const ClientCard = ({ img, paragraph, link }: ClientCardProps) => {
	return (
		<a href='#'>
			<div className={styles.card}>
				<img src={img} alt='Client Logo' />
				<div className={styles["img-overlay"]}></div>
				<div className={styles["card-info"]}>
					<p>{paragraph}</p>
					<a href='#'>{link}</a>
				</div>
			</div>
		</a>
	)
}
