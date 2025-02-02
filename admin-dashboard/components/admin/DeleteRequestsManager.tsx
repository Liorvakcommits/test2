"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
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
import type { DeleteRequest } from "@/types/admin"

type DeleteRequestsManagerProps = {
  deleteRequests: DeleteRequest[]
  onApprove: (requestId: string) => void
  onReject: (requestId: string) => void
}

export function DeleteRequestsManager({ deleteRequests, onApprove, onReject }: DeleteRequestsManagerProps) {
  const [selectedRequest, setSelectedRequest] = useState<DeleteRequest | null>(null)
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false)
  const [action, setAction] = useState<"approve" | "reject" | null>(null)
  const [showNewRequestAlert, setShowNewRequestAlert] = useState(false)

  useEffect(() => {
    if (deleteRequests.length > 0) {
      setShowNewRequestAlert(true)
      toast({
        title: "New Delete Request",
        description: "You have a new user delete request pending approval.",
        duration: 5000,
      })
    }
  }, [deleteRequests])

  const handleAction = (request: DeleteRequest, actionType: "approve" | "reject") => {
    setSelectedRequest(request)
    setAction(actionType)
    setIsAlertDialogOpen(true)
  }

  const confirmAction = () => {
    if (selectedRequest && action) {
      if (action === "approve") {
        onApprove(selectedRequest.id)
      } else {
        onReject(selectedRequest.id)
      }
    }
    setIsAlertDialogOpen(false)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Pending Delete Requests</h2>
      {deleteRequests.length === 0 ? (
        <p>No pending delete requests.</p>
      ) : (
        <div className="space-y-4">
          {deleteRequests.map((request) => (
            <Card key={request.id} className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Delete Request for User: {request.userDetails.fullName}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">User ID: {request.userId}</p>
                  <div className="space-y-2">
                    <p>Requesting Admin: {request.requestingAdminId}</p>
                    <p>User Email: {request.userDetails.email}</p>
                    <p>User Role: {request.userDetails.role}</p>
                    <p>Account Balance: ${request.userDetails.balance}</p>
                    <p>Active Markets: {request.userDetails.activeMarkets}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleAction(request, "reject")}
                    variant="destructive"
                    size="lg"
                    className="bg-red-500 hover:bg-red-600"
                  >
                    <X className="mr-2 h-4 w-4" />
                    Reject
                  </Button>
                  <Button
                    onClick={() => handleAction(request, "approve")}
                    variant="default"
                    size="lg"
                    className="bg-green-500 hover:bg-green-600"
                  >
                    <Check className="mr-2 h-4 w-4" />
                    Approve
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
      <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm {action === "approve" ? "Approval" : "Rejection"}</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to {action} the delete request for user {selectedRequest?.userDetails.fullName}?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmAction}>{action === "approve" ? "Approve" : "Reject"}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog open={showNewRequestAlert} onOpenChange={setShowNewRequestAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>New Delete Request</AlertDialogTitle>
            <AlertDialogDescription>You have a new user delete request pending approval.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowNewRequestAlert(false)}>View Requests</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

