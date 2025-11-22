// Certificate generation and management utilities

export function generateCertificateNumber(): string {
  return `CERT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

export function getCertificateTemplate(type: "transfer" | "bonafide" | "leaving" | "conduct"): string {
  const templates = {
    transfer: `This is to certify that Mr./Ms. [STUDENT_NAME], bearing Roll No. [ROLL_NO] and Enrollment No. [ENROLLMENT_NO], has satisfactorily completed his/her studies in Class [CLASS] and is eligible for transfer to any other recognized educational institution. He/She maintained good conduct throughout his/her stay at our institution.`,
    bonafide: `This is to certify that Mr./Ms. [STUDENT_NAME], bearing Roll No. [ROLL_NO], is a bonafide student of Government School, Class [CLASS] for the academic year 2024-2025. This certificate is issued for [PURPOSE] on request of the student/parents.`,
    leaving: `This is to certify that Mr./Ms. [STUDENT_NAME], bearing Roll No. [ROLL_NO] and Enrollment No. [ENROLLMENT_NO], has left this institution on [DATE] after completing his/her studies up to Class [CLASS]. He/She maintained good conduct during his/her association with the school.`,
    conduct: `This is to certify that Mr./Ms. [STUDENT_NAME], bearing Roll No. [ROLL_NO], Class [CLASS], has maintained excellent conduct throughout the academic year [YEAR]. He/She has been well-behaved, disciplined, and has been a role model for other students.`,
  }
  return templates[type]
}

export function generateCertificateHTML(data: {
  studentName: string
  rollNo: string
  enrollmentNo: string
  class: string
  type: "transfer" | "bonafide" | "leaving" | "conduct"
  issueDate: string
  certificateNumber: string
  principalName: string
}): string {
  const template = getCertificateTemplate(data.type)
  const filledTemplate = template
    .replace("[STUDENT_NAME]", data.studentName)
    .replace("[ROLL_NO]", data.rollNo)
    .replace("[ENROLLMENT_NO]", data.enrollmentNo)
    .replace("[CLASS]", data.class)
    .replace("[DATE]", data.issueDate)
    .replace("[PURPOSE]", "official purposes")
    .replace("[YEAR]", new Date().getFullYear().toString())

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${data.type.toUpperCase()} Certificate</title>
      <style>
        body { font-family: Georgia, serif; margin: 40px; }
        .certificate { border: 8px solid #1e40af; padding: 40px; text-align: center; }
        .header { margin-bottom: 30px; }
        .title { font-size: 24px; font-weight: bold; color: #1e40af; margin: 20px 0; }
        .content { font-size: 14px; line-height: 1.8; margin: 30px 0; text-align: justify; }
        .footer { margin-top: 40px; display: grid; grid-template-columns: 1fr 1fr 1fr; text-align: center; }
        .signature { margin-top: 20px; padding-top: 40px; border-top: 1px solid #000; }
      </style>
    </head>
    <body>
      <div class="certificate">
        <div class="header">
          <h1>GOVERNMENT SCHOOL</h1>
          <p>Excellence in Education</p>
        </div>
        <div class="title">${data.type.toUpperCase()} CERTIFICATE</div>
        <div class="content">${filledTemplate}</div>
        <div class="footer">
          <div>
            <p>Issued Date: ${data.issueDate}</p>
          </div>
          <div>
            <p>Certificate No: ${data.certificateNumber}</p>
          </div>
          <div class="signature">
            <p>${data.principalName}</p>
            <p>Principal</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function downloadCertificateAsHTML(data: Parameters<typeof generateCertificateHTML>[0]) {
  const html = generateCertificateHTML(data)
  const blob = new Blob([html], { type: "text/html" })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `${data.type}-certificate-${data.certificateNumber}.html`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}
