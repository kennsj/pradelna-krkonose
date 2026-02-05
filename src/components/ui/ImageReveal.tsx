import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { prefersReducedMotion } from "../../utils/prefersReducedMotion"

type ImageRevealProps = {
	src: string
	alt: string
	className?: string
	style?: React.CSSProperties
}

export function ImageReveal({ src, alt, className, style }: ImageRevealProps) {
	const containerRef = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		if (!containerRef.current || prefersReducedMotion()) return

		gsap.registerPlugin(ScrollTrigger)

		const ctx = gsap.context(() => {
			// Set initial state
			gsap.set(containerRef.current, {
				clipPath: "inset(100% 0% 0% 0%)",
			})

			// Animate clip path on scroll
			gsap.to(containerRef.current, {
				clipPath: "inset(0% 0% 0% 0%)",
				duration: 0.9,
				ease: "easeInOut",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 85%",
					toggleActions: "play none none none",
				},
			})
		})

		return () => ctx.revert()
	}, [])

	return (
		<div
			ref={containerRef}
			className={className}
			style={{
				width: "100%",
				height: "100%",
				overflow: "hidden",
				...style,
			}}
		>
			<img
				src={src}
				alt={alt}
				style={{
					display: "block",
					width: "100%",
					height: "100%",
					objectFit: "cover",
				}}
			/>
		</div>
	)
}
