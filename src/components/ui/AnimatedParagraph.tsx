import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type AnimatedParagraphProps = {
	children: React.ReactNode
	className?: string
	style?: React.CSSProperties
}

export function AnimatedParagraph({
	children,
	className,
	style,
}: AnimatedParagraphProps) {
	const paragraphRef = useRef<HTMLParagraphElement>(null)

	useLayoutEffect(() => {
		if (!paragraphRef.current || !children) return

		gsap.registerPlugin(SplitText, ScrollTrigger)

		const ctx = gsap.context(() => {
			const split = new SplitText(paragraphRef.current as HTMLElement, {
				type: "lines",
				linesClass: "line++",
			})

			gsap.fromTo(
				split.lines,
				{ yPercent: 100, opacity: 0 },
				{
					yPercent: 0,
					opacity: 1,
					duration: 0.6,
					stagger: 0.06,
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
	}, [children])

	return (
		<p ref={paragraphRef} className={className} style={style}>
			{children}
		</p>
	)
}
