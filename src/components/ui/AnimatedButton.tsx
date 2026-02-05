import React, { useRef, useEffect } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { prefersReducedMotion } from "../../utils/prefersReducedMotion"
import styles from "./AnimatedButton.module.css"

type AnimatedButtonProps = {
	children: React.ReactNode
	onClick?: () => void
	className?: string
	type?: "button" | "submit" | "reset"
	disabled?: boolean
}

export function AnimatedButton({
	children,
	onClick,
	className,
	type = "button",
	disabled = false,
}: AnimatedButtonProps) {
	const buttonRef = useRef<HTMLButtonElement>(null)
	const originalTextRef = useRef<HTMLSpanElement>(null)
	const hiddenTextRef = useRef<HTMLSpanElement>(null)
	const backgroundRef = useRef<HTMLSpanElement>(null)
	const timelineRef = useRef<gsap.core.Timeline | null>(null)

	useEffect(() => {
		if (
			!buttonRef.current ||
			!originalTextRef.current ||
			!hiddenTextRef.current ||
			!backgroundRef.current ||
			prefersReducedMotion()
		)
			return

		gsap.registerPlugin(SplitText)

		// Split both original and hidden text
		const originalSplit = new SplitText(originalTextRef.current, {
			type: "chars, words",
			mask: "words",
			charsClass: "char++",
		})

		const hiddenSplit = new SplitText(hiddenTextRef.current, {
			type: "chars, words",
			mask: "words",
			charsClass: "char++",
		})

		// Set initial state
		gsap.set(hiddenSplit.chars, { yPercent: 100, opacity: 0 })
		gsap.set(backgroundRef.current, { scaleX: 0 })

		// Create hover animation
		const handleMouseEnter = () => {
			// Kill any existing timeline to prevent conflicts
			timelineRef.current?.kill()

			const tl = gsap.timeline()
			timelineRef.current = tl

			// Animate background slide in from left
			tl.to(
				backgroundRef.current,
				{
					scaleX: 1,
					duration: 0.6,
					ease: "power3.inOut",
				},
				0,
			)

			// Animate original text out (up)
			tl.to(
				originalSplit.chars,
				{
					yPercent: -100,
					opacity: 0,
					duration: 0.4,
					stagger: 0.015,
					ease: "power3.in",
				},
				0.05,
			)

			// Animate hidden text in (from bottom) - starts after original text is mostly gone
			tl.to(
				hiddenSplit.chars,
				{
					yPercent: 0,
					opacity: 1,
					duration: 0.4,
					stagger: 0.015,
					ease: "power3.out",
				},
				0.35,
			)
		}

		const handleMouseLeave = () => {
			// Kill any existing timeline to prevent conflicts
			timelineRef.current?.kill()

			const tl = gsap.timeline()
			timelineRef.current = tl

			// Animate background slide out to right
			tl.to(
				backgroundRef.current,
				{
					scaleX: 0,
					duration: 0.6,
					ease: "power3.inOut",
				},
				0,
			)

			// Animate hidden text out (down)
			tl.to(
				hiddenSplit.chars,
				{
					yPercent: 100,
					opacity: 0,
					duration: 0.4,
					stagger: 0.015,
					ease: "power3.in",
				},
				0,
			)

			// Animate original text back in (from bottom) - starts after hidden text is fully out
			tl.to(
				originalSplit.chars,
				{
					yPercent: 0,
					opacity: 1,
					duration: 0.4,
					stagger: 0.015,
					ease: "power3.out",
				},
				0.4,
			)
		}

		buttonRef.current.addEventListener("mouseenter", handleMouseEnter)
		buttonRef.current.addEventListener("mouseleave", handleMouseLeave)

		return () => {
			buttonRef.current?.removeEventListener("mouseenter", handleMouseEnter)
			buttonRef.current?.removeEventListener("mouseleave", handleMouseLeave)
		}
	}, [children])

	return (
		<button
			ref={buttonRef}
			onClick={onClick}
			className={`${styles.animatedButton} ${className || ""}`}
			type={type}
			disabled={disabled}
		>
			<span ref={backgroundRef} className={styles.background}></span>
			<span ref={originalTextRef} className={styles.text}>
				{children}
			</span>
			<span ref={hiddenTextRef} className={styles.hiddenText}>
				{children}
			</span>
		</button>
	)
}
