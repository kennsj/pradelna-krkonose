import React from "react"

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type HeadingProps = {
	as: HeadingTag
	children: React.ReactNode
	className?: string
}

export function Heading({ as, children, className }: HeadingProps) {
	const Tag = as
	return <Tag className={className}>{children}</Tag>
}
