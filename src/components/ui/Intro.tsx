import { Heading } from "./Heading"
import { AnimatedParagraph } from "./AnimatedParagraph"
import { AnimatedButton } from "./AnimatedButton"

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
	animate?: boolean
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
	animate = true,
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
			{paragraph && (
				<AnimatedParagraph animate={animate}>{paragraph}</AnimatedParagraph>
			)}
			{button && (
				<a href=''>
					<AnimatedButton>{button}</AnimatedButton>
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
