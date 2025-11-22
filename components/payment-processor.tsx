"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Lock, CheckCircle2 } from "lucide-react"

interface PaymentProcessorProps {
  studentName: string
  amount: number
  onSuccess?: (transactionId: string) => void
}

export function PaymentProcessor({ studentName, amount, onSuccess }: PaymentProcessorProps) {
  const [step, setStep] = useState<"method" | "details" | "confirm" | "success">("method")
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi" | "netbanking">("card")
  const [cardDetails, setCardDetails] = useState({ cardNumber: "", expiry: "", cvv: "" })
  const [processing, setProcessing] = useState(false)

  const handlePayment = async () => {
    setProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      const transactionId = `TXN-${Date.now()}`
      setProcessing(false)
      setStep("success")
      if (onSuccess) onSuccess(transactionId)
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Gateway</CardTitle>
        <CardDescription>Secure payment processing for {studentName}</CardDescription>
      </CardHeader>
      <CardContent>
        {step === "method" && (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <p className="text-2xl font-bold text-gray-900">₹{amount}</p>
              <p className="text-sm text-gray-600">Amount to pay</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: "card", label: "Credit/Debit Card", icon: "💳" },
                { id: "upi", label: "UPI/Wallet", icon: "📱" },
                { id: "netbanking", label: "Net Banking", icon: "🏦" },
              ].map((method) => (
                <button
                  key={method.id}
                  onClick={() => {
                    setPaymentMethod(method.id as any)
                    setStep("details")
                  }}
                  className={`p-4 rounded-lg border-2 transition ${
                    paymentMethod === method.id ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <p className="text-2xl mb-2">{method.icon}</p>
                  <p className="font-semibold text-gray-900">{method.label}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === "details" && (
          <div className="space-y-4">
            {paymentMethod === "card" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                  <Input
                    placeholder="1234 5678 9012 3456"
                    value={cardDetails.cardNumber}
                    onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry</label>
                    <Input
                      placeholder="MM/YY"
                      value={cardDetails.expiry}
                      onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                    <Input
                      placeholder="123"
                      type="password"
                      value={cardDetails.cvv}
                      onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                    />
                  </div>
                </div>
              </>
            )}

            {paymentMethod === "upi" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">UPI ID</label>
                <Input placeholder="yourname@upi" />
              </div>
            )}

            {paymentMethod === "netbanking" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Bank</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>Axis Bank</option>
                  <option>SBI</option>
                </select>
              </div>
            )}

            <div className="flex gap-2 pt-4">
              <Button variant="outline" onClick={() => setStep("method")}>
                Back
              </Button>
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700" onClick={() => setStep("confirm")}>
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === "confirm" && (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Amount:</span>
                <span className="font-semibold">₹{amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Method:</span>
                <span className="font-semibold capitalize">{paymentMethod}</span>
              </div>
              <div className="border-t pt-2 flex justify-between">
                <span className="text-gray-600 font-semibold">Total:</span>
                <span className="font-bold text-lg">₹{amount}</span>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex gap-2">
              <Lock className="w-5 h-5 text-green-600 flex-shrink-0" />
              <p className="text-sm text-green-700">Your payment is secured with 128-bit encryption</p>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep("details")} disabled={processing}>
                Back
              </Button>
              <Button className="flex-1 bg-green-600 hover:bg-green-700" onClick={handlePayment} disabled={processing}>
                {processing ? "Processing..." : "Pay Securely"}
              </Button>
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="text-center space-y-4 py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Payment Successful!</h3>
              <p className="text-gray-600 mt-1">Transaction ID: TXN-{Date.now()}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-green-700">Receipt has been sent to your email</p>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Download Receipt</Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
