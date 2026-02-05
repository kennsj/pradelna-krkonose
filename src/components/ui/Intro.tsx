import { Heading } from "./Heading"
import { AnimatedParagraph } from "./AnimatedParagraph"

type IntroProps = {
	overline?: string
	title?: string
	paragraph?: string
	button?: string
	link?: string
	children?: React.ReactNode
	align?: "left" | "center" | "right"
	centered?: boolean
	dataWidth?: "narrow"
}

const Intro = ({
	overline,
	title,
	paragraph,
	button,
	link,
	children,
	align = "center",
	centered = false,
	dataWidth,
}: IntroProps) => {
	return (
		<div
			className='intro'
			data-align={align}
			data-centered={centered}
			data-width={dataWidth}
		>
			<Heading as='h5'>{overline}</Heading>
			<Heading as='h2'>{title}</Heading>
			{paragraph && <AnimatedParagraph>{paragraph}</AnimatedParagraph>}
			{button && (
				<a href=''>
					<button>{button}</button>
				</a>
			)}
			{link && (
				<a href='/' className='link'>
					{link}
				</a>
			)}
			{children}
		</div>
	)
}

export default Intro
