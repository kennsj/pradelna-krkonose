import { createRootRoute, Outlet } from "@tanstack/react-router"
import Nav from "../components/layout/Nav/Nav"
import Footer from "../components/layout/Footer/Footer"

function Layout() {
	return (
		<>
			<Nav />
			<Outlet /> {/* Where child routes render */}
			<Footer />
		</>
	)
}

export const Route = createRootRoute({
	component: Layout,
})
