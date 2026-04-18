import BadgeRequest from "../models/BadgeRequest.js";
import { Resend } from "resend";
import env from "../config/env.js";

export const createBadgeRequest = async (req, res) => {
  try {
    const { companyName, firstName, lastName, email, agreementAccepted, intentType, badgeSelection } = req.body;

    if (!companyName || !firstName || !lastName || !email || !intentType) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const badgeRequest = await BadgeRequest.create({
      companyName,
      firstName,
      lastName,
      email,
      agreementAccepted: !!agreementAccepted,
      intentType,
      badgeSelection: badgeSelection || null,
    });

    if (env.resendApiKey) {
      try {
        const resend = new Resend(env.resendApiKey);

        await resend.emails.send({
          from: "CodeHeR <noreply@codeherllc.com>",
          to: ["info@codeherllc.com"],
          subject: intentType === 'commit' ? "New NoMoreLabels Badge Request" : "NoMoreLabels Interest — Follow Up Needed",
          html: `
            <h2>${intentType === 'commit' ? 'New NoMoreLabels Badge Request' : 'NoMoreLabels Interest Submission'}</h2>
            <p><strong>Type:</strong> ${intentType === 'commit' ? 'Full Commitment (Badge Requested)' : 'Interested in Becoming an Inclusive Employer'}</p>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><strong>Contact Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${intentType === 'commit' ? `<p><strong>Badge Selection:</strong> ${badgeSelection}</p><p><strong>Agreement Accepted:</strong> Yes</p>` : ''}
          `,
        });
      } catch (emailError) {
        console.error("Resend email error:", emailError);
      }
    } else {
      console.warn("RESEND_API_KEY is missing. Skipping email send.");
    }

    return res.status(201).json({ success: true, message: "Badge request submitted successfully", data: badgeRequest });
  } catch (error) {
    console.error("Create badge request error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
