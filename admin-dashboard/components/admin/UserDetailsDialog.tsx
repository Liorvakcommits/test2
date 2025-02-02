"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"
import { Card } from "@/components/ui/card"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"
import type { User, Permission, Role, UserStatus } from "@/types/admin"

type UserDetailsDialogProps = {
  user: User | null
  isOpen: boolean
  onClose: () => void
  onSave: (updatedUser: User) => void
  currentUserRole: Role
  onDelete: (user: User) => void
}

type MarketParticipation = {
  marketId: string
  marketName: string
  status: "open" | "closed"
  investment: number
  outcome?: string
  profit?: number
  closeDate: string
  description: string
  category: string
}

type FinancialTransaction = {
  id: string
  type: "deposit" | "withdrawal"
  amount: number
  date: string
  status: "completed" | "pending"
}

type PopularMarket = {
  id: string
  name: string
  endDate: string
  currentPrediction: string
  volume: number
  participants: number
}

export function UserDetailsDialog({
  user,
  isOpen,
  onClose,
  onSave,
  currentUserRole,
  onDelete,
}: UserDetailsDialogProps) {
  const [editedUser, setEditedUser] = useState<User | null>(user)
  const [activeTab, setActiveTab] = useState("details")

  // Mock data for demonstration
  const [marketParticipations] = useState<MarketParticipation[]>([
    {
      marketId: "1",
      marketName: "Bitcoin Price 2024",
      status: "open",
      investment: 100,
      closeDate: "2024-12-31",
      description: "Predict the price of Bitcoin at the end of 2024",
      category: "Cryptocurrency",
    },
    {
      marketId: "2",
      marketName: "US Election 2024",
      status: "open",
      investment: 200,
      closeDate: "2024-11-05",
      description: "Predict the winner of the 2024 US Presidential Election",
      category: "Politics",
    },
    {
      marketId: "3",
      marketName: "Oscar Best Picture 2023",
      status: "closed",
      investment: 50,
      outcome: "won",
      profit: 75,
      closeDate: "2023-03-12",
      description: "Predict the winner of the Oscar for Best Picture in 2023",
      category: "Entertainment",
    },
  ])

  const [financialTransactions] = useState<FinancialTransaction[]>([
    { id: "1", type: "deposit", amount: 500, date: "2023-07-01", status: "completed" },
    { id: "2", type: "withdrawal", amount: 200, date: "2023-07-15", status: "completed" },
    { id: "3", type: "withdrawal", amount: 100, date: "2023-07-20", status: "pending" },
  ])

  const [popularMarkets] = useState<PopularMarket[]>([
    {
      id: "4",
      name: "Tesla Stock Price Q4 2023",
      endDate: "2023-12-31",
      currentPrediction: "Above $300",
      volume: 100000,
      participants: 5000,
    },
    {
      id: "5",
      name: "FIFA World Cup 2026 Host",
      endDate: "2024-06-30",
      currentPrediction: "USA, Canada, and Mexico",
      volume: 75000,
      participants: 3500,
    },
  ])

  // Performance data
  const performanceData = [
    { month: "Jan", profit: 100, investment: 80 },
    { month: "Feb", profit: 150, investment: 100 },
    { month: "Mar", profit: 200, investment: 120 },
    { month: "Apr", profit: 180, investment: 150 },
    { month: "May", profit: 250, investment: 200 },
    { month: "Jun", profit: 300, investment: 220 },
  ]

  useEffect(() => {
    setEditedUser(user)
  }, [user])

  if (!editedUser) return null

  const handleSave = () => {
    if (editedUser) {
      onSave(editedUser)
      toast({
        title: "User Updated",
        description: `${editedUser.fullName}'s details have been updated successfully.`,
      })
      onClose()
    }
  }

  const handleDeleteUser = () => {
    if (editedUser) {
      onDelete(editedUser)
      onClose()
    }
  }

  const handlePermissionChange = (permission: Permission) => {
    setEditedUser((prevUser) => {
      if (!prevUser) return null
      const updatedPermissions = prevUser.permissions.includes(permission)
        ? prevUser.permissions.filter((p) => p !== permission)
        : [...prevUser.permissions, permission]
      return { ...prevUser, permissions: updatedPermissions }
    })
  }

  const canEditRole = currentUserRole === "master_admin"
  const canEditPermissions = currentUserRole === "master_admin" && editedUser.role === "user"

  const kpiData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 500 },
    { name: "Apr", value: 280 },
    { name: "May", value: 390 },
    { name: "Jun", value: 430 },
  ]

  const pieData = [
    { name: "Won", value: 400 },
    { name: "Lost", value: 300 },
    { name: "Pending", value: 300 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[900px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>User Details - {editedUser.fullName}</DialogTitle>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="markets">Markets</TabsTrigger>
            <TabsTrigger value="finances">Finances</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="userId" className="text-right">
                    User ID
                  </Label>
                  <Input id="userId" value={editedUser.id} disabled className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="fullName" className="text-right">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    value={editedUser.fullName}
                    onChange={(e) => setEditedUser({ ...editedUser, fullName: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    value={editedUser.email}
                    onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="status" className="text-right">
                    Status
                  </Label>
                  <Select
                    value={editedUser.accountStatus}
                    onValueChange={(value: UserStatus) => setEditedUser({ ...editedUser, accountStatus: value })}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="suspended">Suspended</SelectItem>
                      <SelectItem value="blocked">Blocked</SelectItem>
                      <SelectItem value="internal_employee">Internal Employee</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="role" className="text-right">
                    Role
                  </Label>
                  <Select
                    value={editedUser.role}
                    onValueChange={(value: Role) => setEditedUser({ ...editedUser, role: value })}
                    disabled={!canEditRole}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="master_admin">Master Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-2">User Activity</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={kpiData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="markets">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Market Participation History</h3>
              {marketParticipations.map((market) => (
                <Card key={market.marketId} className="p-4">
                  <h4 className="text-lg font-semibold mb-2">{market.marketName}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p>
                        <strong>Status:</strong> {market.status}
                      </p>
                      <p>
                        <strong>Investment:</strong> ${market.investment}
                      </p>
                      <p>
                        <strong>Category:</strong> {market.category}
                      </p>
                      {market.outcome && (
                        <p>
                          <strong>Outcome:</strong> {market.outcome}
                        </p>
                      )}
                      {market.profit && (
                        <p>
                          <strong>Profit:</strong> ${market.profit}
                        </p>
                      )}
                    </div>
                    <div>
                      <p>
                        <strong>Close Date:</strong> {market.closeDate}
                      </p>
                      <p>
                        <strong>Description:</strong> {market.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-2">Market Performance</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="finances">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4">
                  <h4 className="text-lg font-semibold mb-2">Account Balance</h4>
                  <p className="text-3xl font-bold text-green-600">${editedUser.walletBalance.toFixed(2)}</p>
                </Card>
                <Card className="p-4">
                  <h4 className="text-lg font-semibold mb-2">Financial Overview</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={kpiData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#82ca9d" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>
              </div>
              <h3 className="text-lg font-semibold">Transaction History</h3>
              {financialTransactions.map((transaction) => (
                <Card key={transaction.id} className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{transaction.type === "deposit" ? "Deposit" : "Withdrawal"}</p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                    <div>
                      <p className={`font-bold ${transaction.type === "deposit" ? "text-green-600" : "text-red-600"}`}>
                        {transaction.type === "deposit" ? "+" : "-"}${transaction.amount}
                      </p>
                      <p className="text-sm text-gray-500">{transaction.status}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="popular">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Popular Markets</h3>
              {popularMarkets.map((market) => (
                <Card key={market.id} className="p-4">
                  <h4 className="text-lg font-semibold mb-2">{market.name}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p>
                        <strong>End Date:</strong> {market.endDate}
                      </p>
                      <p>
                        <strong>Your Prediction:</strong> {market.currentPrediction}
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Volume:</strong> ${market.volume.toLocaleString()}
                      </p>
                      <p>
                        <strong>Participants:</strong> {market.participants.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="performance">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Performance Analysis</h3>
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-2">Profit vs Investment Over Time</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="profit" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="investment" stroke="#82ca9d" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-2">Success Rate</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Success", value: 65 },
                        { name: "Failure", value: 35 },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      <Cell fill="#82ca9d" />
                      <Cell fill="#8884d8" />
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-2">Statistics</h4>
                <p>
                  <strong>Success Rate:</strong> 65%
                </p>
                <p>
                  <strong>Average Profit per Trade:</strong> $25
                </p>
                <p>
                  <strong>Total Markets Participated:</strong> 20
                </p>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        <DialogFooter className="flex justify-between">
          <Button
            variant="destructive"
            onClick={handleDeleteUser}
            disabled={editedUser.role === "master_admin" || editedUser.activeMarkets > 0 || editedUser.balance > 0}
          >
            Delete User
          </Button>
          <Button type="submit" onClick={handleSave}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

