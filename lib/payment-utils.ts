// Payment utility functions for fee management

export function calculateTotalFees(fees: any[]) {
  return fees.reduce((sum, fee) => sum + fee.amount, 0)
}

export function calculatePendingFees(fees: any[]) {
  return fees
    .filter((fee) => fee.status === "pending" || fee.status === "overdue")
    .reduce((sum, fee) => sum + fee.amount, 0)
}

export function calculateCollectionRate(fees: any[]) {
  if (fees.length === 0) return 0
  const paid = fees.filter((fee) => fee.status === "paid").length
  return ((paid / fees.length) * 100).toFixed(2)
}

export function getOverdueStudents(fees: any[], daysThreshold = 30) {
  const now = new Date()
  return fees.filter((fee) => {
    if (fee.status !== "overdue") return false
    const daysOverdue = Math.floor((now.getTime() - new Date(fee.dueDate).getTime()) / (1000 * 60 * 60 * 24))
    return daysOverdue >= daysThreshold
  })
}

export function generatePaymentReport(fees: any[]) {
  return {
    totalFees: calculateTotalFees(fees),
    collectedFees: fees.filter((f) => f.status === "paid").reduce((sum, f) => sum + f.amount, 0),
    pendingFees: calculatePendingFees(fees),
    overdueFees: fees.filter((f) => f.status === "overdue").reduce((sum, f) => sum + f.amount, 0),
    collectionRate: calculateCollectionRate(fees),
    totalRecords: fees.length,
  }
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount)
}
