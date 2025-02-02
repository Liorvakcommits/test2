import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ShieldAlert, AlertCircle } from "lucide-react"

const alerts = [
  {
    type: "High",
    title: "Suspicious Trading Pattern Detected",
    description: "Multiple large trades from same IP address in short time period",
    time: "2 minutes ago",
  },
  {
    type: "Medium",
    title: "Failed Login Attempts",
    description: "Multiple failed login attempts for user ID: 12345",
    time: "15 minutes ago",
  },
  {
    type: "Low",
    title: "Unusual Withdrawal Pattern",
    description: "User attempting multiple small withdrawals in succession",
    time: "1 hour ago",
  },
]

export function AlertsMonitoring() {
  return (
    <div className="space-y-4">
      {alerts.map((alert, index) => (
        <Alert
          key={index}
          className={
            alert.type === "High"
              ? "border-red-500 dark:border-red-400"
              : alert.type === "Medium"
                ? "border-yellow-500 dark:border-yellow-400"
                : "border-blue-500 dark:border-blue-400"
          }
        >
          <AlertTriangle
            className={
              alert.type === "High"
                ? "text-red-500 dark:text-red-400"
                : alert.type === "Medium"
                  ? "text-yellow-500 dark:text-yellow-400"
                  : "text-blue-500 dark:text-blue-400"
            }
          />
          <div className="flex-1">
            <AlertTitle className="flex items-center gap-2">
              {alert.title}
              <Badge variant={alert.type === "High" ? "destructive" : alert.type === "Medium" ? "warning" : "default"}>
                {alert.type} Priority
              </Badge>
            </AlertTitle>
            <AlertDescription className="mt-2 flex justify-between items-center">
              <span>{alert.description}</span>
              <span className="text-sm text-muted-foreground">{alert.time}</span>
            </AlertDescription>
          </div>
        </Alert>
      ))}
    </div>
  )
}

