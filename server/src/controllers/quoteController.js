import Quote from "../models/Quote.js";
import { Resend } from "resend";
import env from "../config/env.js";

export const createQuote = async (req, res) => {
  try {
    const { name, email, organization, projectType, message } = req.body;

    if (!name || !email || !projectType || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    const quote = await Quote.create({
      name,
      email,
      organization,
      projectType,
      message
    });

    if (env.resendApiKey) {
      try {
        const resend = new Resend(env.resendApiKey);

        await resend.emails.send({
          from: "CodeHeR <noreply@codeherllc.com>",
          to: ["info@codeherllc.com"],
          subject: "New Quote Request",
          html: `
            <h2>New Quote Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Organization:</strong> ${organization || "N/A"}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `
        });
      } catch (emailError) {
        console.error("Resend email error:", emailError);
      }
    } else {
      console.warn("RESEND_API_KEY is missing. Skipping email send.");
    }

    return res.status(201).json({
      success: true,
      message: "Quote submitted successfully",
      data: quote
    });
  } catch (error) {
    console.error("Create quote error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
