import { Resend } from "resend";
import { NextResponse } from "next/server";

// Initialize Resend with your API key
const resend = new Resend("123123123");

export async function POST(request) {
  try {
    // Parse the JSON body from the request

    // info@affanagroseeds.com

    const {
      name,
      companyName,
      email,
      phone,
      product,
      destinationPort,
      comment,
    } = await request.json();

    const recipient = "captain.gaze@gmail.com";

    console.log("recipient:", recipient);

    // Validate required fields
    if (!name || !email || !product) {
      return NextResponse.json(
        { error: "Name, email and product are required fields" },
        { status: 400 }
      );
    }

    // Format the email content
    const emailContent = `
      <h2>New Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${companyName || "N/A"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Product:</strong> ${product}</p>
      <p><strong>Destination Port:</strong> ${destinationPort || "N/A"}</p>
      <p><strong>Comment:</strong> ${comment || "N/A"}</p>
    `;

    // Send the email
    const data = await resend.emails.send({
      // from: "Your Company <noreply@yourcompany.com>", // Replace with your domain

      from: "Acme <onboarding@resend.dev>'",
      to: [recipient], // Replace with recipient email
      subject: "New Inquiry from website",
      // html: emailContent,
      // reply_to: email,
      react: emailContent,
    });

    return NextResponse.json({ status: 200, success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
