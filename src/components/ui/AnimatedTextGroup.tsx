import { useRef, useLayoutEffect, type ReactNode } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { prefersReducedMotion } from "../../utils/prefersReducedMotion"

type AnimatedTextGroupProps = {
	children: ReactNode
	className?: string
	stagger?: number
}

export function AnimatedTextGroup({
	children,
	className,
	stagger = 0.1,
}: AnimatedTextGroupProps) {
	const containerRef = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		if (!containerRef.current || prefersReducedMotion()) return

		gsap.registerPlugin(SplitText, ScrollTrigger)

		const ctx = gsap.context(() => {
			// Find all p elements within the container
			const paragraphs = containerRef.current?.querySelectorAll("p")

			if (!paragraphs || paragraphs.length === 0) return

			// Split all paragraphs into lines
			const splits = Array.from(paragraphs).map((p) => {
				return new SplitText(p, {
					type: "lines",
					linesClass: "line++",
					mask: "lines",
				})
			})

			// Collect all lines from all paragraphs
			const allLines = splits.flatMap((split) => split.lines)

			// Animate all lines together
			gsap.fromTo(
				allLines,
				{ yPercent: 100, opacity: 0, skewY: 2 },
				{
					yPercent: 0,
					opacity: 1,
					duration: 0.8,
					skewY: 0,
					stagger,
					ease: "power3.out",
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top 85%",
						toggleActions: "play none none none",
					},
				},
			)
		})

		return () => ctx.revert()
	}, [stagger, children])

	return (
		<div ref={containerRef} className={className}>
			{children}
		</div>
	)
}
