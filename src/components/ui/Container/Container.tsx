import { Link } from "@tanstack/react-router"
import { Heading } from "../Heading"
import { ImageReveal } from "../ImageReveal"
import styles from "./Container.module.css"

type ContainerProps = {
	overline?: string
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
				{imageUrl && <ImageReveal src={imageUrl} alt={imageAlt || ""} />}
				{form && <form>{form}</form>}
			</div>
			<div className={styles["info-container"]}>
				<Heading as='h5' className={styles["info-overline"]}>
					{overline}
				</Heading>
				<Heading as='h2' className={styles["info-title"]}>
					{title}
				</Heading>
				{children}
				{buttonText && buttonLink && <Link to={buttonLink}>{buttonText}</Link>}
			</div>
		</div>
	)
}

export default Container
