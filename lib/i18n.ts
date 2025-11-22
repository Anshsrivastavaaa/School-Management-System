// Multi-language support for the school management system
// Supports English and Hindi for Indian government schools

export type Language = "en" | "hi"

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Common
    "common.dashboard": "Dashboard",
    "common.logout": "Logout",
    "common.settings": "Settings",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.delete": "Delete",
    "common.edit": "Edit",
    "common.view": "View",
    "common.download": "Download",
    "common.upload": "Upload",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
    "common.warning": "Warning",

    // Admin
    "admin.dashboard": "Admin Dashboard",
    "admin.students": "Students",
    "admin.teachers": "Teachers",
    "admin.fees": "Fees Management",
    "admin.certificates": "Certificates",
    "admin.settings": "School Settings",
    "admin.total_students": "Total Students",
    "admin.active_teachers": "Active Teachers",
    "admin.pending_fees": "Pending Fees",
    "admin.fee_collected": "Fee Collected",

    // Teacher
    "teacher.attendance": "Mark Attendance",
    "teacher.marks": "Upload Marks",
    "teacher.assignments": "Assignments",
    "teacher.messages": "Messages",
    "teacher.class": "Class",
    "teacher.present": "Present",
    "teacher.absent": "Absent",
    "teacher.leave": "Leave",
    "teacher.save_attendance": "Save Attendance",

    // Parent
    "parent.performance": "Child's Performance",
    "parent.attendance": "Attendance",
    "parent.fees_payment": "Fees & Payments",
    "parent.messages": "Messages",
    "parent.child_name": "Child Name",
    "parent.class": "Class",
    "parent.current_gpa": "Current GPA",
    "parent.latest_marks": "Latest Marks",
    "parent.pay_fees": "Pay Fees Online",

    // Student
    "student.certificates": "My Certificates",
    "student.request_certificate": "Request Certificate",
    "student.download": "Download Certificate",

    // Principal
    "principal.approvals": "Approvals",
    "principal.reports": "Reports",
    "principal.staff": "Staff Management",
    "principal.performance": "Performance",

    // Certificates
    "cert.transfer": "Transfer Certificate",
    "cert.bonafide": "Bonafide Certificate",
    "cert.leaving": "Leaving Certificate",
    "cert.conduct": "Conduct Certificate",
    "cert.pending": "Pending Approval",
    "cert.approved": "Approved",
    "cert.issued": "Issued",

    // Fees
    "fees.tuition": "Tuition Fee",
    "fees.exam": "Exam Fee",
    "fees.activity": "Activity Fee",
    "fees.library": "Library Fee",
    "fees.paid": "Paid",
    "fees.pending": "Pending",
    "fees.overdue": "Overdue",
    "fees.total_collected": "Total Collected",
    "fees.pending_amount": "Pending Amount",

    // Messages
    "msg.inbox": "Inbox",
    "msg.send": "Send Message",
    "msg.reply": "Reply",
    "msg.no_messages": "No messages",

    // Time
    "time.today": "Today",
    "time.yesterday": "Yesterday",
    "time.this_week": "This Week",
    "time.this_month": "This Month",
  },
  hi: {
    // Common
    "common.dashboard": "डैशबोर्ड",
    "common.logout": "लॉग आउट",
    "common.settings": "सेटिंग्स",
    "common.save": "सहेजें",
    "common.cancel": "रद्द करें",
    "common.delete": "हटाएं",
    "common.edit": "संपादित करें",
    "common.view": "देखें",
    "common.download": "डाउनलोड",
    "common.upload": "अपलोड",
    "common.search": "खोजें",
    "common.filter": "फिल्टर",
    "common.loading": "लोड हो रहा है...",
    "common.error": "त्रुटि",
    "common.success": "सफल",
    "common.warning": "चेतावनी",

    // Admin
    "admin.dashboard": "प्रशासन डैशबोर्ड",
    "admin.students": "छात्र",
    "admin.teachers": "शिक्षक",
    "admin.fees": "शुल्क प्रबंधन",
    "admin.certificates": "प्रमाणपत्र",
    "admin.settings": "स्कूल सेटिंग्स",
    "admin.total_students": "कुल छात्र",
    "admin.active_teachers": "सक्रिय शिक्षक",
    "admin.pending_fees": "लंबित शुल्क",
    "admin.fee_collected": "एकत्र शुल्क",

    // Teacher
    "teacher.attendance": "उपस्थिति चिह्नित करें",
    "teacher.marks": "अंक अपलोड करें",
    "teacher.assignments": "असाइनमेंट",
    "teacher.messages": "संदेश",
    "teacher.class": "कक्षा",
    "teacher.present": "उपस्थित",
    "teacher.absent": "अनुपस्थित",
    "teacher.leave": "अवकाश",
    "teacher.save_attendance": "उपस्थिति सहेजें",

    // Parent
    "parent.performance": "बच्चे की प्रदर्शन",
    "parent.attendance": "उपस्थिति",
    "parent.fees_payment": "शुल्क और भुगतान",
    "parent.messages": "संदेश",
    "parent.child_name": "बच्चे का नाम",
    "parent.class": "कक्षा",
    "parent.current_gpa": "वर्तमान GPA",
    "parent.latest_marks": "नवीनतम अंक",
    "parent.pay_fees": "ऑनलाइन शुल्क का भुगतान करें",

    // Student
    "student.certificates": "मेरे प्रमाणपत्र",
    "student.request_certificate": "प्रमाणपत्र का अनुरोध करें",
    "student.download": "प्रमाणपत्र डाउनलोड करें",

    // Principal
    "principal.approvals": "अनुमोदन",
    "principal.reports": "रिपोर्ट",
    "principal.staff": "कर्मचारी प्रबंधन",
    "principal.performance": "प्रदर्शन",

    // Certificates
    "cert.transfer": "स्थानांतरण प्रमाणपत्र",
    "cert.bonafide": "प्रामाणिकता प्रमाणपत्र",
    "cert.leaving": "त्यागपत्र",
    "cert.conduct": "आचरण प्रमाणपत्र",
    "cert.pending": "अनुमोदन लंबित",
    "cert.approved": "अनुमोदित",
    "cert.issued": "जारी किया गया",

    // Fees
    "fees.tuition": "ट्यूशन शुल्क",
    "fees.exam": "परीक्षा शुल्क",
    "fees.activity": "गतिविधि शुल्क",
    "fees.library": "पुस्तकालय शुल्क",
    "fees.paid": "भुगतान किया गया",
    "fees.pending": "लंबित",
    "fees.overdue": "नियत तारीख समाप्त",
    "fees.total_collected": "कुल एकत्र",
    "fees.pending_amount": "लंबित राशि",

    // Messages
    "msg.inbox": "इनबॉक्स",
    "msg.send": "संदेश भेजें",
    "msg.reply": "जवाब दें",
    "msg.no_messages": "कोई संदेश नहीं",

    // Time
    "time.today": "आज",
    "time.yesterday": "कल",
    "time.this_week": "इस सप्ताह",
    "time.this_month": "इस महीने",
  },
}

export function t(key: string, language: Language = "en"): string {
  return translations[language][key] || key
}

export function getLanguageName(lang: Language): string {
  return lang === "en" ? "English" : "हिंदी"
}
