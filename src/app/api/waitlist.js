import nodemailer from 'nodemailer'


const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS
const FROM_EMAIL = process.env.FROM_EMAIL || SMTP_USER
const TO_EMAIL = process.env.TO_EMAIL


let transporter
function getTransporter() {
if (transporter) return transporter
transporter = nodemailer.createTransport({
host: SMTP_HOST,
port: SMTP_PORT,
secure: SMTP_PORT === 465,
auth: { user: SMTP_USER, pass: SMTP_PASS },
})
return transporter
}


export default async function handler(req, res) {
if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })
const { email } = req.body || {}
if (!email || !/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ message: 'Valid email required' })


const normalized = String(email).toLowerCase().trim()
const receipt = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`


try {
const t = getTransporter()
const ownerSubject = `New waitlist signup: ${normalized}`
const ownerHtml = `<p>New waitlist signup</p><ul><li><strong>email:</strong> ${normalized}</li><li><strong>receipt:</strong> ${receipt}</li><li><strong>time:</strong> ${new Date().toISOString()}</li></ul>`


const userSubject = `Thanks — you're on the waitlist`;
const userHtml = `<p>Thanks — we've received your email and added you to the waitlist.</p><p>Your confirmation id: <strong>${receipt}</strong></p>`


await Promise.all([
t.sendMail({ from: FROM_EMAIL, to: TO_EMAIL, subject: ownerSubject, html: ownerHtml, replyTo: normalized }),
t.sendMail({ from: FROM_EMAIL, to: normalized, subject: userSubject, html: userHtml, replyTo: TO_EMAIL }),
])


return res.status(200).json({ success: true, receipt, message: "Thanks! We've received your email." })
} catch (err) {
console.error('waitlist smtp error', err)
return res.status(500).json({ message: 'Failed to send email' })
}
}