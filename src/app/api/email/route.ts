import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_MY_EMAIL,
      pass: process.env.NEXT_PUBLIC_MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.NEXT_PUBLIC_MY_EMAIL,
    to: process.env.NEXT_PUBLIC_MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Your message has been sent successfully!");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({
      message: "Your message has been sent successfully!",
    });
  } catch (err) {
    console.error("Error in sending email:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
