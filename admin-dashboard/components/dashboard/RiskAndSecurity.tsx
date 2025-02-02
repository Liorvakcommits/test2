"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertTriangle, Shield, AlertCircle } from "lucide-react"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const mockSecurityData = {
  activeAlerts: 5,
  suspiciousActivities: 3,
  failedLogins: 12,
  riskLevel: "Medium",
  recentIncidents: [
    {
      id: 1,
      type: "Suspicious Login",
      description: "Multiple failed login attempts from IP 192.168.1.1",
      severity: "high",
      time: "2 minutes ago",
    },
    {
      id: 2,
      type: "Large Transaction",
      description: "Unusual transaction pattern detected",
      severity: "medium",
      time: "15 minutes ago",
    },
    {
      id: 3,
      type: "API Access",
      description: "Unauthorized API access attempt",
      severity: "low",
      time: "1 hour ago",
    },
  ],
  vulnerableAccounts: [
    { id: "ACC001", risk: "High", reason: "Weak password", lastLogin: "2023-07-01" },
    { id: "ACC002", risk: "Medium", reason: "Unusual login pattern", lastLogin: "2023-07-05" },
    { id: "ACC003", risk: "High", reason: "Multiple failed attempts", lastLogin: "2023-07-02" },
  ],
}

const riskDistributionData = [
  { name: "High Risk", value: 30 },
  { name: "Medium Risk", value: 45 },
  { name: "Low Risk", value: 25 },
]

const COLORS = ["#FF8042", "#FFBB28", "#00C49F"]

const suspiciousActivitiesData = [
  // Sample data - replace with your actual data
  { date: "2023-10-26", activities: 2 },
  { date: "2023-10-27", activities: 5 },
  { date: "2023-10-28", activities: 3 },
  { date: "2023-10-29", activities: 7 },
  { date: "2023-10-30", activities: 4 },
]

const failedLoginsData = [
  // Sample data - replace with your actual data
  { platform: "Web", count: 8 },
  { platform: "Mobile", count: 4 },
  { platform: "API", count: 2 },
]

export function RiskAndSecurity() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Risk & Security</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockSecurityData.activeAlerts}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Suspicious Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockSecurityData.suspiciousActivities}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed Logins (24h)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockSecurityData.failedLogins}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Risk Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockSecurityData.riskLevel}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={riskDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {riskDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Recent Security Incidents</CardTitle>
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                <span className="text-xs">High Severity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
                <span className="text-xs">Medium Severity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                <span className="text-xs">Low Severity</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockSecurityData.recentIncidents.map((incident) => (
                <Alert
                  key={incident.id}
                  variant={incident.severity as "default" | "destructive"}
                  className="border-l-4 border-l-red-500"
                >
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle className="flex items-center gap-2">
                    {incident.type}
                    <Badge
                      variant={
                        incident.severity === "high"
                          ? "destructive"
                          : incident.severity === "medium"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {incident.severity}
                    </Badge>
                  </AlertTitle>
                  <AlertDescription className="mt-2 flex justify-between items-center">
                    <span>{incident.description}</span>
                    <span className="text-sm text-muted-foreground">{incident.time}</span>
                  </AlertDescription>
                </Alert>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vulnerable Accounts</CardTitle>
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                <span className="text-xs">High Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
                <span className="text-xs">Medium Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                <span className="text-xs">Low Risk</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Account ID</TableHead>
                  <TableHead>Risk Level</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Last Login</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockSecurityData.vulnerableAccounts.map((account) => (
                  <TableRow key={account.id}>
                    <TableCell>{account.id}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          account.risk === "High" ? "destructive" : account.risk === "Medium" ? "default" : "secondary"
                        }
                      >
                        {account.risk}
                      </Badge>
                    </TableCell>
                    <TableCell>{account.reason}</TableCell>
                    <TableCell>{account.lastLogin}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

