"use client"

import { useState, useEffect } from "react"
import { UsersList } from "@/components/admin/UsersList"
import { DeleteRequestsManager } from "@/components/admin/DeleteRequestsManager"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Shield } from "lucide-react"
import type { DeleteRequest, User } from "@/types/admin"
import { UserActivityDashboard } from "@/components/admin/UserActivityDashboard"

const initialUsers: User[] = [
  {
    id: "001",
    fullName: "John Doe",
    email: "john@example.com",
    registrationDate: "2023-01-15",
    lastLoginDate: "2023-07-01",
    accountStatus: "active",
    authMethod: "Google",
    role: "user",
    permissions: ["create_markets", "edit_markets"],
    isInternalUser: false,
    balance: 1000,
    activeMarkets: 2,
    walletBalance: 1500.5,
    registrationDevice: "Android",
    lastAppVersion: "1.2.3",
    walletAddress: "0x1234567890123456789012345678901234567890",
    tokenId: "TOKEN001",
  },
  {
    id: "002",
    fullName: "Jane Smith",
    email: "jane@example.com",
    registrationDate: "2023-02-20",
    lastLoginDate: "2023-07-10",
    accountStatus: "internal_employee",
    authMethod: "Email",
    role: "admin",
    permissions: [
      "create_markets",
      "edit_markets",
      "manage_users",
      "access_basic_reports",
      "suspend_users",
      "manage_support_tickets",
      "moderate_content",
      "view_system_logs",
      "manage_marketing_campaigns",
    ],
    isInternalUser: true,
    balance: 0,
    activeMarkets: 0,
    walletBalance: 0,
    registrationDevice: "iOS",
    lastAppVersion: "1.2.4",
    walletAddress: "0x2345678901234567890123456789012345678901",
    tokenId: "TOKEN002",
  },
  {
    id: "003",
    fullName: "Bob Johnson",
    email: "bob@example.com",
    registrationDate: "2023-03-10",
    lastLoginDate: "2023-07-15",
    accountStatus: "manager",
    authMethod: "MetaMask",
    role: "master_admin",
    permissions: [
      "create_markets",
      "edit_markets",
      "delete_markets",
      "manage_users",
      "manage_admins",
      "view_financial_data",
      "modify_financial_data",
      "access_all_reports",
      "configure_system",
      "manage_roles",
      "override_admin_actions",
      "access_audit_logs",
      "modify_fee_structure",
      "suspend_users",
      "manage_support_tickets",
      "moderate_content",
      "view_system_logs",
      "manage_marketing_campaigns",
      "resolve_markets",
    ],
    isInternalUser: true,
    balance: 0,
    activeMarkets: 0,
    walletBalance: 0,
    registrationDevice: "Windows",
    lastAppVersion: "1.2.5",
    walletAddress: "0x3456789012345678901234567890123456789012",
    tokenId: "TOKEN003",
  },
]

const STORAGE_KEY = "adminDeleteRequests"

export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers)
  const [deleteRequests, setDeleteRequests] = useState<DeleteRequest[]>([])
  const [currentUserRole, setCurrentUserRole] = useState<"admin" | "master_admin">("admin")
  const { toast } = useToast()

  // Simulate getting the actual user's role
  const [actualUserRole] = useState<"admin" | "master_admin">("master_admin")

  // Load delete requests from localStorage on component mount
  useEffect(() => {
    const savedRequests = localStorage.getItem(STORAGE_KEY)
    if (savedRequests) {
      try {
        const parsed = JSON.parse(savedRequests)
        setDeleteRequests(parsed)
      } catch (error) {
        console.error("Error parsing saved delete requests:", error)
      }
    }
  }, [])

  // Save delete requests to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(deleteRequests))
  }, [deleteRequests])

  const handleDeleteRequest = (userId: string) => {
    const user = users.find((u) => u.id === userId)
    if (user) {
      const newRequest: DeleteRequest = {
        id: `req_${Date.now()}`,
        userId: user.id,
        requestingAdminId: "002", // Assuming Jane Smith (admin) is making the request
        status: "pending",
        userDetails: user,
      }
      setDeleteRequests((prev) => [...prev, newRequest])
    }
  }

  const handleApproveDeleteRequest = (requestId: string) => {
    const request = deleteRequests.find((req) => req.id === requestId)
    if (request) {
      setUsers(users.filter((user) => user.id !== request.userId))
      setDeleteRequests(deleteRequests.filter((req) => req.id !== requestId))
      toast({
        title: "Delete Request Approved",
        description: `The delete request for user ${request.userDetails.fullName} has been approved.`,
      })
    }
  }

  const handleRejectDeleteRequest = (requestId: string) => {
    const request = deleteRequests.find((req) => req.id === requestId)
    setDeleteRequests(deleteRequests.filter((req) => req.id !== requestId))
    if (request) {
      toast({
        title: "Delete Request Rejected",
        description: `The delete request for user ${request.userDetails.fullName} has been rejected.`,
      })
    }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">User Management</h1>
        {actualUserRole === "master_admin" && (
          <Button
            onClick={() => setCurrentUserRole(currentUserRole === "admin" ? "master_admin" : "admin")}
            className={`${
              currentUserRole === "master_admin" ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 hover:bg-gray-600"
            }`}
          >
            <Shield className="mr-2 h-4 w-4" />
            {currentUserRole === "admin" ? "Switch to Master Admin" : "Switch to Admin"}
          </Button>
        )}
      </div>
      <div className="mb-8">
        <UserActivityDashboard />
      </div>
      <div className="mb-8">
        <UsersList users={users} currentUserRole={currentUserRole} onDeleteRequest={handleDeleteRequest} />
      </div>
      {currentUserRole === "master_admin" && deleteRequests.length > 0 && (
        <div>
          <DeleteRequestsManager
            deleteRequests={deleteRequests}
            onApprove={handleApproveDeleteRequest}
            onReject={handleRejectDeleteRequest}
          />
        </div>
      )}
    </div>
  )
}

