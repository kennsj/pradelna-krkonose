import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { prefersReducedMotion } from "../../utils/prefersReducedMotion"

type AnimatedParagraphProps = {
	children: React.ReactNode
	className?: string
	style?: React.CSSProperties
	animate?: boolean
}

export function AnimatedParagraph({
	children,
	className,
	style,
	animate = true,
}: AnimatedParagraphProps) {
	const paragraphRef = useRef<HTMLParagraphElement>(null)

	useLayoutEffect(() => {
		if (
			animate === false ||
			!paragraphRef.current ||
			!children ||
			prefersReducedMotion()
		)
			return
		if (!paragraphRef.current || !children || prefersReducedMotion()) return

		gsap.registerPlugin(SplitText, ScrollTrigger)

		const ctx = gsap.context(() => {
			const split = new SplitText(paragraphRef.current as HTMLElement, {
				type: "words, lines",
				linesClass: "words++",
				mask: "lines",
			})

			gsap.fromTo(
				split.words,
				{ yPercent: 100, opacity: 0 },
				{
					yPercent: 0,
					opacity: 1,
					duration: 0.6,
					stagger: 0.02,
					ease: "power3.out",
					scrollTrigger: {
						trigger: paragraphRef.current,
						start: "top 85%",
						toggleActions: "play none none none",
					},
				},
			)
		})

		return () => ctx.revert()
	}, [children, animate])

	return (
		<p ref={paragraphRef} className={className} style={style}>
			{children}
		</p>
	)
}
