import { createRootRoute, Outlet } from "@tanstack/react-router"
import Nav from "../components/layout/Nav/Nav"
import Footer from "../components/layout/Footer/Footer"
import Hero from "../components/layout/Hero/Hero"
import Contact from "../components/layout/Contact/Contact"

function Layout() {
	return (
		<>
			<Nav />
			<main>
				<Outlet /> {/* Where child routes render */}
				<section>
					<Contact />
				</section>
			</main>
			<Footer />
		</>
	)
}

function NotFound() {
	return (
		<Hero
			img='./img/cdb49f4f897889c109d06ae709eea2f5f2468a6f.webp'
			title='404'
			subtitle='Webová stránka se ztratila v pračce a my se snažíme ji ven dostat, jak je to jen možné. Zatím se můžete vrátit na úvodní stránku.'
			link='Zpět na start'
			url='/'
		/>
	)
}

export const Route = createRootRoute({
	component: Layout,
	notFoundComponent: NotFound,
})
