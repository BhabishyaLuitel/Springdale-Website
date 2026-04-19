"use server";

import nodemailer from "nodemailer";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { Buffer } from "buffer";

async function generateAdmissionPDF(data: Record<string, string>): Promise<Buffer> {
  try {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595.28, 841.89]); // A4 Size
    
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const obliqueFont = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

    const margin = 50;
    let currentY = 841.89 - margin; // Start from top
    
    const drawText = (text: string, fontType: any, size: number, color: any, xOffset: number = margin) => {
      page.drawText(text, { x: xOffset, y: currentY, size, font: fontType, color });
      currentY -= size + 5;
    };

    const drawLine = () => {
      currentY -= 5;
      page.drawLine({
        start: { x: margin, y: currentY },
        end: { x: 595.28 - margin, y: currentY },
        thickness: 1,
        color: rgb(0.92, 0.70, 0.03), // #EAB308 mapping
      });
      currentY -= 15;
    };

    // Header
    currentY -= 20;
    const title = "Shree Springdale Secondary School";
    const titleWidth = boldFont.widthOfTextAtSize(title, 22);
    page.drawText(title, {
      x: (595.28 - titleWidth) / 2,
      y: currentY,
      size: 22,
      font: boldFont,
      color: rgb(0, 0.51, 0.40), // #008266 mapping
    });
    currentY -= 30;

    const subTitle = "Admission Application Form";
    const subTitleWidth = font.widthOfTextAtSize(subTitle, 14);
    page.drawText(subTitle, {
      x: (595.28 - subTitleWidth) / 2,
      y: currentY,
      size: 14,
      font: font,
      color: rgb(0.3, 0.3, 0.3), // #4a4a4a mapping
    });
    currentY -= 40;

    // Helper function to render sections
    const renderSection = (title: string, fields: { label: string; value: string }[]) => {
      drawText(title, boldFont, 14, rgb(0, 0.51, 0.40));
      drawLine();

      fields.forEach(({ label, value }) => {
        page.drawText(`${label}: `, { x: margin, y: currentY, size: 11, font: boldFont, color: rgb(0.2, 0.2, 0.2) });
        const labelWidth = boldFont.widthOfTextAtSize(`${label}: `, 11);
        page.drawText(value || "N/A", { x: margin + labelWidth, y: currentY, size: 11, font: font, color: rgb(0, 0, 0) });
        currentY -= 20;
      });
      currentY -= 15;
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

    // Handle multi-line for medical
    drawText("Additional Information", boldFont, 14, rgb(0, 0.51, 0.40));
    drawLine();
    
    page.drawText("Medical / Allergies: ", { x: margin, y: currentY, size: 11, font: boldFont, color: rgb(0.2, 0.2, 0.2) });
    const medWidth = boldFont.widthOfTextAtSize("Medical / Allergies: ", 11);
    
    // Naive truncation/wrap if needed, but pdf-lib doesn't have auto-wrap easily natively so we slice.
    const medVal = (data.medical || "N/A").substring(0, 80); 
    page.drawText(medVal, { x: margin + medWidth, y: currentY, size: 11, font: font, color: rgb(0, 0, 0) });
    currentY -= 20;

    page.drawText("Referred By: ", { x: margin, y: currentY, size: 11, font: boldFont, color: rgb(0.2, 0.2, 0.2) });
    const refWidth = boldFont.widthOfTextAtSize("Referred By: ", 11);
    page.drawText(data.referral || "N/A", { x: margin + refWidth, y: currentY, size: 11, font: font, color: rgb(0, 0, 0) });
    currentY -= 40;

    const footerText = `Application generated automatically on ${new Date().toLocaleString()}`;
    const footerWidth = obliqueFont.widthOfTextAtSize(footerText, 10);
    page.drawText(footerText, {
      x: (595.28 - footerWidth) / 2,
      y: currentY,
      size: 10,
      font: obliqueFont,
      color: rgb(0.5, 0.5, 0.5),
    });

    const pdfBytes = await pdfDoc.save();
    return Buffer.from(pdfBytes);
  } catch (error) {
    throw error;
  }
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

    if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
      throw new Error("Missing environment variables. Did you restart the server?");
    }

    // Generate PDF
    const pdfBuffer = await generateAdmissionPDF(data);

    // Extract documents
    const documents = formData.getAll("documents") as File[];
    const mailAttachments: any[] = [
      {
        filename: `Admission_Application_${data.studentName.replace(/\s+/g, "_")}.pdf`,
        content: pdfBuffer,
        contentType: "application/pdf",
      },
    ];

    for (const doc of documents) {
      if (doc && doc.size > 0) {
        const docBuffer = await doc.arrayBuffer();
        mailAttachments.push({
          filename: doc.name,
          content: Buffer.from(docBuffer),
          contentType: doc.type,
        });
      }
    }

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
          <h2 style="color: #008266; border-bottom: 2px solid #008266; padding-bottom: 10px;">New Admission Application Received</h2>
          <p>An admission form has been submitted for <strong>${data.studentName}</strong> to join <strong>${data.grade}</strong> (${data.level}).</p>
          <p>Please find the complete application details in the attached PDF.</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #008266;">
            <p><strong>Guardian:</strong> ${data.guardianName} (${data.relationship})</p>
            <p><strong>Contact:</strong> ${data.guardianPhone}</p>
          </div>
        </div>
      `,
      attachments: mailAttachments,
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error: any) {
    console.error("Error sending admission email:", error);
    require("fs").writeFileSync("crash.log", String(error.stack || error));
    return { error: "Failed to submit application. Reason: " + String(error.message || error) };
  }
}
