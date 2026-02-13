import { createFileRoute } from "@tanstack/react-router"
import Hero from "../components/layout/Hero/Hero"

export const Route = createFileRoute("/")({
	component: NotFound,
})

function NotFound() {
	return (
		<Hero
			img='./img/cdb49f4f897889c109d06ae709eea2f5f2468a6f.webp'
			title='Woops - 404!'
			subtitle='Webová stránka se ztratila v pračce a my se snažíme ji ven dostat, jak je to jen možné. Zatím se můžete vrátit na úvodní stránku.'
			link='Zpět na start'
			url='/'
		/>
	)
}
