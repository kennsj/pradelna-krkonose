import React, { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { prefersReducedMotion } from "../../utils/prefersReducedMotion"

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type HeadingProps = {
	as: HeadingTag
	children: React.ReactNode
	className?: string
	setAnimation?: boolean
}

export function Heading({
	as,
	children,
	className,
	setAnimation,
}: HeadingProps) {
	const Tag = as
	const headingRef = useRef<HTMLHeadingElement>(null)

	useLayoutEffect(() => {
		if (setAnimation === false || !headingRef.current || prefersReducedMotion())
			return

		gsap.registerPlugin(SplitText, ScrollTrigger)

		const ctx = gsap.context(() => {
			const split = new SplitText(headingRef.current as HTMLElement, {
				type: "chars, words",
				mask: "words",
				charsClass: "char++",
				wordsClass: "word++",
			})

			gsap.fromTo(
				split.chars,
				{ yPercent: 100, opacity: 0 },
				{
					yPercent: 0,
					opacity: 1,
					duration: 0.8,
					stagger: 0.01,
					ease: "power3.out",
					scrollTrigger: {
						trigger: headingRef.current,
						start: "top 80%",
						toggleActions: "play none none none",
					},
				},
			)
		})

		return () => ctx.revert()
	}, [children, setAnimation])

	return (
		<Tag
			ref={headingRef as React.Ref<HTMLHeadingElement>}
			className={className}
		>
			{children}
		</Tag>
	)
}
