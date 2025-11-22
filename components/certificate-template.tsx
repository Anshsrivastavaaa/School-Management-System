"use client"

import { forwardRef } from "react"

interface CertificateTemplateProps {
  studentName: string
  enrollmentNumber: string
  className: string
  certificateType: "transfer" | "bonafide" | "leaving" | "conduct"
  issuedDate: string
  certificateNumber: string
  principalName: string
  schoolName: string
}

const certificateMessages = {
  transfer:
    "This is to certify that the student has satisfactorily completed their studies and is eligible for transfer.",
  bonafide: "This is to certify that the student is a bonafide student of this institution.",
  leaving: "This is to certify that the student has left the institution with good conduct.",
  conduct: "This is to certify that the student has maintained excellent conduct during their stay.",
}

export const CertificateTemplate = forwardRef<HTMLDivElement, CertificateTemplateProps>(
  (
    {
      studentName,
      enrollmentNumber,
      className,
      certificateType,
      issuedDate,
      certificateNumber,
      principalName,
      schoolName,
    },
    ref,
  ) => {
    const getBackgroundColor = () => {
      switch (certificateType) {
        case "transfer":
          return "from-blue-50 to-cyan-50"
        case "bonafide":
          return "from-green-50 to-emerald-50"
        case "leaving":
          return "from-purple-50 to-pink-50"
        case "conduct":
          return "from-amber-50 to-orange-50"
        default:
          return "from-gray-50 to-slate-50"
      }
    }

    const getBorderColor = () => {
      switch (certificateType) {
        case "transfer":
          return "border-blue-300"
        case "bonafide":
          return "border-green-300"
        case "leaving":
          return "border-purple-300"
        case "conduct":
          return "border-amber-300"
        default:
          return "border-gray-300"
      }
    }

    return (
      <div
        ref={ref}
        className={`bg-gradient-to-br ${getBackgroundColor()} border-8 ${getBorderColor()} p-12 w-full aspect-[8.5/11] flex flex-col items-center justify-center text-center`}
        style={{ background: "white" }}
      >
        {/* School Header */}
        <div className="mb-6">
          <p className="text-2xl font-bold text-gray-800">GOVERNMENT SCHOOL</p>
          <p className="text-sm text-gray-600 mt-1">Excellence in Education</p>
        </div>

        {/* Certificate Type */}
        <h1
          className={`text-4xl font-bold mb-6 ${
            certificateType === "transfer"
              ? "text-blue-700"
              : certificateType === "bonafide"
                ? "text-green-700"
                : certificateType === "leaving"
                  ? "text-purple-700"
                  : "text-amber-700"
          }`}
        >
          {certificateType.toUpperCase()} CERTIFICATE
        </h1>

        {/* Certificate Message */}
        <p className="text-gray-700 mb-6 text-sm max-w-md">{certificateMessages[certificateType]}</p>

        {/* Student Details */}
        <div className="w-full max-w-md my-8 space-y-4">
          <div className="border-b-2 border-gray-400 pb-2">
            <p className="text-gray-600 text-sm">Student Name</p>
            <p className="text-2xl font-bold text-gray-900">{studentName}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border-b-2 border-gray-400 pb-2">
              <p className="text-gray-600 text-xs">Enrollment No.</p>
              <p className="text-lg font-semibold text-gray-900">{enrollmentNumber}</p>
            </div>
            <div className="border-b-2 border-gray-400 pb-2">
              <p className="text-gray-600 text-xs">Class</p>
              <p className="text-lg font-semibold text-gray-900">{className}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto w-full grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-gray-600 text-xs mb-2">Issued Date</p>
            <p className="font-semibold text-gray-900">{issuedDate}</p>
          </div>
          <div>
            <p className="text-gray-600 text-xs mb-2">Certificate No.</p>
            <p className="font-semibold text-gray-900">{certificateNumber}</p>
          </div>
          <div>
            <p className="text-gray-600 text-xs mb-2">Principal</p>
            <p className="font-semibold text-gray-900">{principalName}</p>
          </div>
        </div>

        {/* Security Badge */}
        <div className="mt-6 text-xs text-gray-600">
          <p>✓ Digitally Verified • Secure Document</p>
        </div>
      </div>
    )
  },
)

CertificateTemplate.displayName = "CertificateTemplate"
