import styles from "./SecondaryCTA.module.css"

type SecondaryCTAProps = {
	url: string
	children: React.ReactNode
	dataLinkHidden?: boolean
}

const SecondaryCTA = ({ url, children, dataLinkHidden }: SecondaryCTAProps) => {
	return (
		<a
			href={url}
			data-link-hidden={dataLinkHidden}
			className={styles.secondaryCTA}
		>
			{children}
		</a>
	)
}

export default SecondaryCTA
