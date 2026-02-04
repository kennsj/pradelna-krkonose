import styles from "./Container.module.css"

type ContainerProps = {
	overline: string
	title: string
	children: React.ReactNode
	imageUrl?: string
	imageAlt?: string
	buttonText?: string
	buttonLink?: string
	contentOnRight?: boolean
	form?: React.ReactNode
}

const Container = ({
	overline,
	title,
	children,
	imageUrl,
	imageAlt,
	buttonText,
	buttonLink,
	contentOnRight = false,
	form,
}: ContainerProps) => {
	return (
		<div
			className={`${styles.container} ${contentOnRight ? styles["image-right"] : ""}`}
		>
			<div className={styles["media-container"]}>
				{imageUrl && <img src={imageUrl} alt={imageAlt} />}
				{form && <form>{form}</form>}
			</div>
			<div className={styles["info-container"]}>
				<h5>{overline}</h5>
				<h2>{title}</h2>
				{children}
				{buttonText && buttonLink && <a href={buttonLink}>{buttonText}</a>}
			</div>
		</div>
	)
}

export default Container
