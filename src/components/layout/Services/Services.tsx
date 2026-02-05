import { Heading } from "../../ui/Heading"
import Intro from "../../ui/Intro"
import styles from "./Services.module.css"
import { useScrollReveal } from "../../../hooks/useScrollReveal"

const Services = () => {
	const cardsRef = useScrollReveal({
		selector: `.${styles.card}`,
		yPercent: 10,
		opacity: 0,
		stagger: 0.1,
	})

	return (
		<div>
			<Intro
				overline='NAŠE SLUŽBY'
				title='Kompletní prádelenský servis pro provozy v Krkonoších'
				paragraph='Postaráme se o praní, sušení, mandlování i logistiku prádla. Spolehlivě, pravidelně a s ohledem na sezónní vytížení vašeho provozu.'
				align='center'
				centered={true}
				dataWidth='narrow'
			/>
			<div
				className={styles.cards}
				ref={cardsRef as React.RefObject<HTMLDivElement>}
			>
				<ServiceCard
					img='./icons/truck.svg'
					title='Svoz a rozvoz'
					description='Prádlo vyzvedneme a doručíme zpět podle domluveného harmonogramu. Logistiku řešíme spolehlivě, bez zbytečných prostojů.'
				/>
				<ServiceCard
					img='./icons/hanger.svg'
					title='Skládání a třídění'
					description='Prádlo vracíme přehledně složené a připravené k okamžitému použití. Šetříme čas personálu a usnadňujeme provoz.'
				/>
				<ServiceCard
					img='./icons/washer.svg'
					title='Praní a mandlování'
					description='Pravidelné praní, sušení a mandlování ložního prádla, ručníků a provozního textilu. Stálá kvalita i při vyšším objemu zakázek.'
				/>
				<ServiceCard
					img='./icons/clock.svg'
					title='Flexibilita v sezóně'
					description='Navýšení kapacity v hlavní sezóně bez stresu. Jsme připraveni na plnou obsazenost i nečekané situace.'
				/>
			</div>
		</div>
	)
}

type ClientCardProps = {
	img: string
	title: string
	description: string
}

export default Services

const ServiceCard = ({ img, title, description }: ClientCardProps) => {
	return (
		<div className={styles.card}>
			<img src={img} alt={title} />
			<Heading as='h4' setAnimation={false}>
				{title}
			</Heading>
			<p>{description}</p>
		</div>
	)
}
