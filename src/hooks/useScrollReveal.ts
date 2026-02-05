import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type ScrollRevealOptions = {
	yPercent?: number
	opacity?: number
	duration?: number
	stagger?: number
	ease?: string
	start?: string
	selector?: string
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
	const {
		yPercent = 10,
		opacity = 0,
		duration = 0.8,
		stagger = 0.1,
		ease = "power3.out",
		start = "top 75%",
		selector,
	} = options

	const containerRef = useRef<HTMLElement>(null)

	useLayoutEffect(() => {
		if (!containerRef.current) return

		gsap.registerPlugin(ScrollTrigger)

		const ctx = gsap.context(() => {
			const elements = selector
				? containerRef.current?.querySelectorAll(selector)
				: [containerRef.current]

			if (elements && elements.length > 0) {
				gsap.fromTo(
					elements,
					{ yPercent, opacity },
					{
						yPercent: 0,
						opacity: 1,
						duration,
						stagger,
						ease,
						scrollTrigger: {
							trigger: containerRef.current,
							start,
							toggleActions: "play none none none",
						},
					},
				)
			}
		})

		return () => ctx.revert()
	}, [yPercent, opacity, duration, stagger, ease, start, selector])

	return containerRef
}
