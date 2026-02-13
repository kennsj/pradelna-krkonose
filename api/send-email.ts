import { VercelRequest, VercelResponse } from "@vercel/node"
import { Resend } from "resend"

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" })
	}

	const resend = new Resend(process.env.RESEND_API_KEY)

	const { email, name, phone, facilityType, message } = req.body

	// Validation
	if (!email || !name || !phone || !facilityType || !message) {
		return res.status(400).json({ error: "Missing required fields" })
	}

	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return res.status(400).json({ error: "Invalid email format" })
	}

	if (!/^\+?[0-9\s\-()]{9,}$/.test(phone)) {
		return res.status(400).json({ error: "Invalid phone number" })
	}

	try {
		console.log(
			"RESEND_API_KEY:",
			process.env.RESEND_API_KEY?.substring(0, 10) + "...",
		)
		console.log("OWNER_EMAIL:", process.env.OWNER_EMAIL)

		const emailResponse = await resend.emails.send({
			from: "onboarding@resend.dev",
			// Change
			to: process.env.OWNER_EMAIL || "",
			reply_to: email,
			subject: `Nová poptávka z webu - ${facilityType}`,
			html: `
				<h2>Nová poptávka</h2>
				<p><strong>Jméno:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Telefon:</strong> ${phone}</p>
				<p><strong>Typ provozu:</strong> ${facilityType}</p>
				<p><strong>Zpráva:</strong></p>
				<p>${message.replace(/\n/g, "<br>")}</p>
			`,
		})

		console.log("Resend response:", emailResponse)

		if (emailResponse.error) {
			console.error("Resend error:", emailResponse.error)
			return res
				.status(500)
				.json({ error: "Failed to send email", details: emailResponse.error })
		}

		return res.status(200).json({
			success: true,
			message: "Email sent successfully",
			id: emailResponse.data?.id,
		})
	} catch (error) {
		console.error("Email error:", error)
		return res
			.status(500)
			.json({ error: "Failed to send email", details: String(error) })
	}
}
