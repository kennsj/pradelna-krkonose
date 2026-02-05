import type { ReactNode } from "react"
import styles from "./Hero.module.css"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useRef, useLayoutEffect } from "react"
import { Link } from "@tanstack/react-router"
import { prefersReducedMotion } from "../../../utils/prefersReducedMotion"
import { AnimatedButton } from "../../ui/AnimatedButton"

type HeroProps = {
	img: string
	title: ReactNode
	subtitle: string
	link?: string
	url?: string
}

const Hero = ({ img, title, subtitle, link, url }: HeroProps) => {
	const titleRef = useRef<HTMLHeadingElement>(null)
	const subtitleRef = useRef<HTMLParagraphElement>(null)
	const buttonRef = useRef<HTMLAnchorElement>(null)
	const imgContainerRef = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		if (!titleRef.current || prefersReducedMotion()) return
		gsap.registerPlugin(SplitText)

		const ctx = gsap.context(() => {
			const split = new SplitText(titleRef.current as HTMLElement, {
				type: "chars",
				mask: "chars",
				charsClass: "char++",
			})

			const subtitleSplit = subtitleRef.current
				? new SplitText(subtitleRef.current as HTMLElement, {
						type: "lines",
						mask: "lines",
						linesClass: styles["subtitle-line"],
					})
				: null

			const tl = gsap.timeline()

			if (imgContainerRef.current) {
				gsap.set(imgContainerRef.current, {
					clipPath: "inset(100% 0% 0% 0%)",
				})
				tl.to(
					imgContainerRef.current,
					{
						delay: 0.2,
						clipPath: "inset(0% 0% 0% 0%)",
						duration: 0.9,
						ease: "easeInOut",
					},
					0,
				)
			}

			tl.fromTo(
				split.chars,
				{ yPercent: 100, opacity: 0 },
				{
					yPercent: 0,
					opacity: 1,
					duration: 0.8,
					stagger: 0.01,
					ease: "power3.out",
				},
				0.1,
			)

			if (subtitleSplit?.lines?.length) {
				tl.fromTo(
					subtitleSplit.lines,
					{ yPercent: 100, opacity: 0 },
					{
						yPercent: 0,
						opacity: 1,
						duration: 0.6,
						stagger: 0.06,
						ease: "power3.out",
					},
					0.35,
				)
			}

			if (buttonRef.current) {
				tl.fromTo(
					buttonRef.current,
					{ y: 16, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
					0.45,
				)
			}
		})

		return () => ctx.revert()
	}, [])

	return (
		<header className={styles.header}>
			<div className={styles["img-container"]} ref={imgContainerRef}>
				<img src={img} alt={typeof title === "string" ? title : ""} />
				<div className={styles["img-overlay"]}></div>
			</div>
			<div className={styles["header-info"]}>
				<h1 className={styles.title} ref={titleRef}>
					{title}
				</h1>
				<p className={styles.subtitle} ref={subtitleRef}>
					{subtitle}
				</p>

				{link && url && (
					<Link to={url} ref={buttonRef}>
						<AnimatedButton>{link}</AnimatedButton>
					</Link>
				)}
			</div>
		</header>
	)
}

export default Hero
