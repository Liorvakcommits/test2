import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

const suspiciousActivities = [
  {
    title: "Unusual Trading Pattern",
    description: "User ID 12345 executed 50 trades in 5 minutes",
    severity: "high",
  },
  {
    title: "Multiple Failed Logins",
    description: "10 failed login attempts for User ID 67890",
    severity: "medium",
  },
  {
    title: "Large Withdrawal Request",
    description: "User ID 54321 requested withdrawal of $100,000",
    severity: "low",
  },
]

export function FraudDetection() {
  return (
    <div className="space-y-4">
      {suspiciousActivities.map((activity, index) => (
        <Alert key={index} variant={activity.severity as "default" | "destructive"}>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>{activity.title}</AlertTitle>
          <AlertDescription>{activity.description}</AlertDescription>
        </Alert>
      ))}
    </div>
  )
}

