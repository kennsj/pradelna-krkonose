import { Heading } from "./Heading"

type IntroProps = {
	overline?: string
	title?: string
	paragraph?: string
	button?: string
	link?: string
	children?: React.ReactNode
	align?: "left" | "center" | "right"
	centered?: boolean
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
}: IntroProps) => {
	return (
		<div className='intro' data-align={align} data-centered={centered}>
			<Heading as='h5'>{overline}</Heading>
			<Heading as='h2'>{title}</Heading>
			<p>{paragraph}</p>
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
