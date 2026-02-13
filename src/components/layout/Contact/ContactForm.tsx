import { useState } from "react"
import { useForm } from "@tanstack/react-form"
import styles from "./Contact.module.css"
import SecondaryCTA from "../../ui/SecondaryButton/SecondaryCTA"

const ContactForm = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [success, setSuccess] = useState(false)

	const form = useForm({
		defaultValues: {
			facilityType: "",
			name: "",
			phone: "",
			email: "",
			message: "",
		},
		onSubmit: async ({ value }) => {
			setIsLoading(true)
			setError(null)
			setSuccess(false)

			console.log("Submitting form with:", value)

			try {
				console.log("Fetching /api/send-email...")
				const response = await fetch("/api/send-email", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(value),
				})

				console.log("Response status:", response.status)

				if (!response.ok) {
					let errorMessage = "Failed to send email"
					try {
						const data = await response.json()
						errorMessage = data.error || errorMessage
					} catch {
						errorMessage = `Server error: ${response.status}`
					}
					throw new Error(errorMessage)
				}

				await response.json()
				setSuccess(true)
				form.reset()
				setTimeout(() => setSuccess(false), 5000)
			} catch (err) {
				console.error("Form submission error:", err)
				setError(err instanceof Error ? err.message : "Chyba při odesílání")
			} finally {
				setIsLoading(false)
			}
		},
	})

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				form.handleSubmit()
			}}
		>
			<form.Field name='facilityType'>
				{(field) => (
					<div className={styles["form-group"]}>
						<label>Typ provozu</label>
						<select
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
							required
						>
							<option value=''>Vyberte</option>
							<option value='hotel'>Hotel</option>
							<option value='pension'>Pension</option>
							<option value='restaurace'>Restaurace</option>
							<option value='chata'>Chata</option>
							<option value='jine'>Jiné</option>
						</select>
					</div>
				)}
			</form.Field>

			<form.Field name='name'>
				{(field) => (
					<div className={styles["form-group"]}>
						<label>Jméno a příjmení</label>
						<input
							id='name'
							type='text'
							placeholder='Jan Novák'
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
							required
						/>
					</div>
				)}
			</form.Field>

			<div className={styles["form-row"]}>
				<form.Field name='phone'>
					{(field) => (
						<div className={styles["form-group"]}>
							<label>Telefon</label>
							<input
								id='phone'
								type='tel'
								placeholder='+420 77x xxx xxx'
								value={field.state.value}
								onChange={(e) => field.handleChange(e.target.value)}
								required
							/>
						</div>
					)}
				</form.Field>

				<form.Field name='email'>
					{(field) => (
						<div className={styles["form-group"]}>
							<label>Email</label>
							<input
								id='email'
								type='email'
								placeholder='novak@email.com'
								value={field.state.value}
								onChange={(e) => field.handleChange(e.target.value)}
								required
							/>
						</div>
					)}
				</form.Field>
			</div>

			<form.Field name='message'>
				{(field) => (
					<div className={styles["form-group"]}>
						<label>Poznámka</label>
						<textarea
							placeholder='Objčem, velikost zařízení...'
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
							required
						></textarea>
					</div>
				)}
			</form.Field>

			<div className={styles["form-footer"]}>
				<div>
					<button type='submit' disabled={isLoading}>
						{isLoading ? "Odesílám..." : "Odeslat poptávku"}
					</button>
					<SecondaryCTA url='tel:+420777123456'>Raději voláte?</SecondaryCTA>
				</div>
				<p>Ozveme se do 24 hodin. Bez zbytečných.</p>
			</div>

			{error && <div className={styles["form-error"]}>Chyba: {error}</div>}
			{success && (
				<div className={styles["form-success"]}>
					✓ Poptávka úspěšně odeslána! Brzy se vám ozveme.
				</div>
			)}
		</form>
	)
}

export default ContactForm
