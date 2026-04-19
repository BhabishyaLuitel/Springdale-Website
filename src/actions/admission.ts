"use server";

import nodemailer from "nodemailer";
import PDFDocument from "pdfkit";
import { Buffer } from "buffer";

async function generateAdmissionPDF(data: Record<string, string>): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 50, size: "A4" });
      const buffers: Buffer[] = [];

      doc.on("data", (chunk) => buffers.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(buffers)));
      doc.on("error", reject);

      // Header
      doc.font("Helvetica-Bold").fontSize(22).fillColor("#1a4d2e").text("Shree Springdale Secondary School", { align: "center" });
      doc.fontSize(14).fillColor("#4a4a4a").text("Admission Application Form", { align: "center" });
      doc.moveDown(2);

      // Helper function to render sections
      const renderSection = (title: string, fields: { label: string; value: string }[]) => {
        doc.font("Helvetica-Bold").fontSize(14).fillColor("#1a4d2e").text(title);
        doc.moveTo(doc.x, doc.y + 2).lineTo(doc.page.width - 50, doc.y + 2).strokeColor("#c5a059").stroke();
        doc.moveDown(0.5);

        fields.forEach(({ label, value }) => {
          doc.font("Helvetica-Bold").fontSize(11).fillColor("#333333").text(`${label}: `, { continued: true });
          doc.font("Helvetica").text(value || "N/A");
        });
        doc.moveDown(1.5);
      };

      // Sections
      renderSection("Student Information", [
        { label: "Full Name", value: data.studentName },
        { label: "Date of Birth", value: data.dob },
        { label: "Gender", value: data.gender },
        { label: "Home Address", value: data.address },
      ]);

      renderSection("Academic Details", [
        { label: "Applying Level", value: data.level },
        { label: "Applying Grade", value: data.grade },
        { label: "Previous School", value: data.prevSchool },
        { label: "Last Grade Completed", value: data.lastGrade },
      ]);

      renderSection("Guardian Information", [
        { label: "Guardian's Name", value: data.guardianName },
        { label: "Relationship", value: data.relationship },
        { label: "Phone Number", value: data.guardianPhone },
        { label: "Email Address", value: data.guardianEmail },
      ]);

      renderSection("Additional Information", [
        { label: "Medical / Allergies", value: data.medical },
        { label: "Referred By", value: data.referral },
      ]);

      // Footer
      doc.moveDown(2);
      doc.font("Helvetica-Oblique").fontSize(10).fillColor("#888888").text(`Application generated automatically on ${new Date().toLocaleString()}`, { align: "center" });

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
}

export async function submitAdmissionForm(prevState: any, formData: FormData) {
  try {
    // Extract data
    const data: Record<string, string> = {
      studentName: formData.get("studentName") as string,
      dob: formData.get("dob") as string,
      gender: formData.get("gender") as string,
      address: formData.get("address") as string,
      level: formData.get("level") as string,
      grade: formData.get("grade") as string,
      prevSchool: formData.get("prevSchool") as string,
      lastGrade: formData.get("lastGrade") as string,
      guardianName: formData.get("guardianName") as string,
      relationship: formData.get("relationship") as string,
      guardianPhone: formData.get("guardianPhone") as string,
      guardianEmail: formData.get("guardianEmail") as string,
      medical: formData.get("medical") as string,
      referral: formData.get("referral") as string,
    };

    if (!data.studentName || !data.dob || !data.gender || !data.address || !data.level || !data.grade || !data.guardianName || !data.guardianPhone) {
      return { error: "Missing required fields." };
    }

    // Generate PDF
    const pdfBuffer = await generateAdmissionPDF(data);

    // Setup Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${data.guardianName}" <${process.env.SMTP_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: data.guardianEmail || process.env.SMTP_EMAIL,
      subject: `New Admission Application: ${data.studentName} (${data.grade})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #1a4d2e; border-bottom: 2px solid #1a4d2e; padding-bottom: 10px;">New Admission Application Received</h2>
          <p>An admission form has been submitted for <strong>${data.studentName}</strong> to join <strong>${data.grade}</strong> (${data.level}).</p>
          <p>Please find the complete application details in the attached PDF.</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #1a4d2e;">
            <p><strong>Guardian:</strong> ${data.guardianName} (${data.relationship})</p>
            <p><strong>Contact:</strong> ${data.guardianPhone}</p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: `Admission_Application_${data.studentName.replace(/\s+/g, "_")}.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error("Error sending admission email:", error);
    return { error: "Failed to submit application. Please try again later." };
  }
}
