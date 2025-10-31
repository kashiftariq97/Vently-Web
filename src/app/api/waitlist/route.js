import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'


const SMTP_HOST_APP = process.env.SMTP_HOST
const SMTP_PORT_APP = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
const SMTP_USER_APP = process.env.SMTP_USER
const SMTP_PASS_APP = process.env.SMTP_PASS
const FROM_EMAIL_APP = process.env.FROM_EMAIL || SMTP_USER_APP
const TO_EMAIL_APP = process.env.TO_EMAIL


let transporterApp
function getTransporterApp() {
if (transporterApp) return transporterApp
transporterApp = nodemailer.createTransport({
host: SMTP_HOST_APP,
port: SMTP_PORT_APP,
secure: SMTP_PORT_APP === 465,
auth: { user: SMTP_USER_APP, pass: SMTP_PASS_APP },
})
return transporterApp
}


export async function POST(req) {
const { email } = await req.json().catch(() => ({}))
if (!email || !/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ message: 'Valid email required' }, { status: 400 })


const normalized = String(email).toLowerCase().trim()
const receipt = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`


try {
const t = getTransporterApp()
const ownerSubject = `New waitlist signup: ${normalized}`
const ownerHtml = `<p>New waitlist signup</p><ul><li><strong>email:</strong> ${normalized}</li><li><strong>receipt:</strong> ${receipt}</li><li><strong>time:</strong> ${new Date().toISOString()}</li></ul>`


const userSubject = `Thanks — you're on the waitlist`;
const userHtml = `<p>Thanks — we've received your email and added you to the waitlist.</p><p>Your confirmation id: <strong>${receipt}</strong></p>`


await Promise.all([
t.sendMail({ from: FROM_EMAIL_APP, to: TO_EMAIL_APP, subject: ownerSubject, html: ownerHtml, replyTo: normalized }),
t.sendMail({ from: FROM_EMAIL_APP, to: normalized, subject: userSubject, html: userHtml, replyTo: TO_EMAIL_APP }),
])


return NextResponse.json({ success: true, receipt, message: 'Thanks — email sent.' })
} catch (err) {
console.error('waitlist smtp error', err)
return NextResponse.json({ message: 'Failed to send email' }, { status: 500 })
}
}