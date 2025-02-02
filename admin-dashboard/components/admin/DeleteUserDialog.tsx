import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import type { User } from "@/types/admin"

type DeleteUserDialogProps = {
  user: User | null
  isOpen: boolean
  onClose: () => void
  onDelete: (userId: string) => void
}

export function DeleteUserDialog({ user, isOpen, onClose, onDelete }: DeleteUserDialogProps) {
  if (!user) return null

  const handleDelete = () => {
    onDelete(user.id)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm User Deletion</DialogTitle>
        </DialogHeader>
        <p>
          Are you sure you want to delete the user {user.fullName} (ID: {user.id})?
        </p>
        <p>This action cannot be undone.</p>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete User
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

