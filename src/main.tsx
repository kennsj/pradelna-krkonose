import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import Nav from "./components/layout/Nav/Nav.tsx"
import Footer from "./components/layout/Footer/Footer.tsx"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Nav />
		<App />
		<Footer />
	</StrictMode>,
)
