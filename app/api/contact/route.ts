import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const mailEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_TO"];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, goal, budget, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const sheetUrl = process.env.SHEET_WEBHOOK_URL;
    if (!sheetUrl) {
      return NextResponse.json(
        { error: "Missing SHEET_WEBHOOK_URL" },
        { status: 500 }
      );
    }

    const payload = {
      name,
      email,
      goal,
      budget,
      message,
      submittedAt: new Date().toISOString()
    };

    const sheetResponse = await fetch(sheetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (sheetResponse.status >= 400) {
      return NextResponse.json({ error: "Sheet request failed" }, { status: 502 });
    }

    const missingMail = mailEnv.filter((key) => !process.env[key]);
    if (missingMail.length === 0) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      const html = `
        <h2>New Strategy Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Goal:</strong> ${goal ?? ""}</p>
        <p><strong>Budget:</strong> ${budget ?? ""}</p>
        <p><strong>Message:</strong></p>
        <p>${message ?? ""}</p>
      `;

      await transporter.sendMail({
        from: process.env.MAIL_FROM ?? `DigitalHub360 <${process.env.SMTP_USER}>`,
        to: process.env.MAIL_TO,
        replyTo: email,
        subject: `New Strategy Request — ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nGoal: ${goal ?? ""}\nBudget: ${budget ?? ""}\nMessage: ${message ?? ""}`,
        html
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
