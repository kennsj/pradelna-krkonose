import styles from "./Feature.module.css"

const Feature = ({ features }: { features: string[] }) => {
	return (
		<div className={styles.features}>
			{features.map((feature) => (
				<span key={feature}>
					<img src='./public/CheckCircle.svg' alt='Check Circle' />
					{feature}
				</span>
			))}
		</div>
	)
}

export default Feature
