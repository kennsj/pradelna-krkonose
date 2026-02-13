import { Heading } from "./Heading"
import { AnimatedParagraph } from "./AnimatedParagraph"
import { AnimatedButton } from "./AnimatedButton"

type IntroProps = {
	overline?: string
	title?: string
	paragraph?: string
	link?: string
	url?: string
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
	link,
	url,
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
			{url && (
				<AnimatedButton url={url} className='link'>
					{link}
				</AnimatedButton>
			)}
			{children}
		</div>
	)
}

export default Intro
