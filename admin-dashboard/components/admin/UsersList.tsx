"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { UserDetailsDialog } from "./UserDetailsDialog"
import { DeleteUserDialog } from "./DeleteUserDialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { toast } from "@/components/ui/use-toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { User, Role } from "@/types/admin"

interface UsersListProps {
  users: User[]
  currentUserRole: Role
  onDeleteRequest: (userId: string) => void
}

export function UsersList({ users, currentUserRole, onDeleteRequest }: UsersListProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchType, setSearchType] = useState("name")
  const [statusFilter, setStatusFilter] = useState("all")
  const [roleFilter, setRoleFilter] = useState("all")
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false)

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      searchType === "name"
        ? user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
        : searchType === "email"
          ? user.email.toLowerCase().includes(searchTerm.toLowerCase())
          : searchType === "wallet"
            ? user.walletAddress.toLowerCase().includes(searchTerm.toLowerCase())
            : searchType === "token"
              ? user.tokenId.toLowerCase().includes(searchTerm.toLowerCase())
              : true

    return (
      matchesSearch &&
      (statusFilter === "all" || user.accountStatus === statusFilter) &&
      (roleFilter === "all" || user.role === roleFilter)
    )
  })

  const handleDeleteUser = (user: User) => {
    if (currentUserRole === "master_admin") {
      setSelectedUser(user)
      setIsDeleteDialogOpen(true)
    } else {
      setSelectedUser(user)
      setIsAlertDialogOpen(true)
    }
  }

  const handleDeleteRequest = () => {
    if (selectedUser) {
      onDeleteRequest(selectedUser.id)
      setIsAlertDialogOpen(false)
      toast({
        title: "Delete Request Sent",
        description: `Your request to delete user ${selectedUser.fullName} has been sent to a Master Admin for approval.`,
        duration: 5000,
      })
    }
  }

  const truncateWalletAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <Select value={searchType} onValueChange={setSearchType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Search by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="wallet">Wallet Address</SelectItem>
            <SelectItem value="token">Token ID</SelectItem>
          </SelectContent>
        </Select>
        <Input
          placeholder={`Search by ${searchType}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="suspended">Suspended</SelectItem>
            <SelectItem value="blocked">Blocked</SelectItem>
            <SelectItem value="internal_employee">Internal Employee</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
          </SelectContent>
        </Select>
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="user">User</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="master_admin">Master Admin</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User ID</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Registration Date</TableHead>
            <TableHead>Last Login</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Auth Method</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Wallet Balance</TableHead>
            <TableHead>Registration Device</TableHead>
            <TableHead>Last App Version</TableHead>
            <TableHead>Wallet Address</TableHead>
            <TableHead>Token ID</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell
                className={`
                ${user.role === "master_admin" ? "bg-green-100" : user.role === "admin" ? "bg-yellow-100" : ""}
              `}
              >
                {user.id}
              </TableCell>
              <TableCell>{user.fullName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.registrationDate}</TableCell>
              <TableCell>{user.lastLoginDate}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    user.accountStatus === "active"
                      ? "success"
                      : user.accountStatus === "suspended"
                        ? "warning"
                        : user.accountStatus === "blocked"
                          ? "destructive"
                          : user.accountStatus === "internal_employee" || user.accountStatus === "manager"
                            ? "outline"
                            : "default"
                  }
                >
                  {user.isInternalUser ? `Internal - ${user.accountStatus}` : user.accountStatus}
                </Badge>
              </TableCell>
              <TableCell>{user.authMethod}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>${user.walletBalance.toFixed(2)}</TableCell>
              <TableCell>{user.registrationDevice}</TableCell>
              <TableCell>{user.lastAppVersion}</TableCell>
              <TableCell>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-pointer underline">{truncateWalletAddress(user.walletAddress)}</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{user.walletAddress}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
              <TableCell>{user.tokenId}</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setSelectedUser(user)
                    setIsDetailsDialogOpen(true)
                  }}
                >
                  View/Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <UserDetailsDialog
        user={selectedUser}
        isOpen={isDetailsDialogOpen}
        onClose={() => setIsDetailsDialogOpen(false)}
        onSave={() => {}}
        currentUserRole={currentUserRole}
        onDelete={(user) => handleDeleteUser(user)}
      />

      <DeleteUserDialog
        user={selectedUser}
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onDelete={() => {}}
      />

      <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Delete Request</AlertDialogTitle>
            <AlertDialogDescription>
              You need approval from a Master Admin to delete this user. Do you want to send a delete request?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteRequest}>Send Request</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

