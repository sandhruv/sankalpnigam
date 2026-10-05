import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const mailUser = process.env.GMAIL_USER;
const mailPassword = process.env.GMAIL_APP_PASSWORD;
const toAddress = process.env.CONTACT_TO ?? mailUser;

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: Request) {
  if (!mailUser || !mailPassword) {
    return NextResponse.json(
      { ok: false, error: "Mail is not configured on this server." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  if (!isPlainObject(body)) {
    return NextResponse.json(
      { ok: false, error: "Invalid payload." },
      { status: 400 },
    );
  }

  const payload = body as Payload;
  const name = String(payload.name ?? "").trim().slice(0, 120);
  const email = String(payload.email ?? "").trim().slice(0, 200);
  const subject = String(payload.subject ?? "").trim().slice(0, 200);
  const message = String(payload.message ?? "").trim().slice(0, 5000);

  if (
    !name ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    message.length < 10
  ) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Please add your name, a valid e-mail and a message of at least 10 characters.",
      },
      { status: 400 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: mailUser, pass: mailPassword },
    });

    await transporter.sendMail({
      from: `"${name}" <${mailUser}>`,
      to: toAddress,
      replyTo: email,
      subject: subject || `Portfolio enquiry from ${name}`,
      text: `${message}\n\n— ${name}\n${email}`,
      html: `
        <p style="font-family:Arial,sans-serif;font-size:15px;color:#111">${message.replace(
          /\n/g,
          "<br/>",
        )}</p>
        <p style="font-family:Arial,sans-serif;font-size:13px;color:#666">
          — ${name} &lt;${email}&gt;<br/>Sent from the portfolio contact form
        </p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("contact form send failed", error);
    return NextResponse.json(
      { ok: false, error: "Could not send the e-mail. Please try again." },
      { status: 502 },
    );
  }
}
