import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomerPositions } from "./CustomerPositions"
import { CustomerActivity } from "./CustomerActivity"
import { CustomerOrderbook } from "./CustomerOrderbook"
import { CustomerTransactions } from "./CustomerTransactions"
import { CustomerComments } from "./CustomerComments"
import { CustomerFinancials } from "./CustomerFinancials"
import { CustomerSettings } from "./CustomerSettings"

export function CustomerDetailsDialog({ user, open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[900px]">
        <DialogHeader>
          <DialogTitle>{user.name}</DialogTitle>
          <DialogDescription>User ID: {user.id}</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Join Date:</strong> {user.joinDate}
            </p>
            <p>
              <strong>Last Login:</strong> {user.lastLogin}
            </p>
            <p>
              <strong>Status:</strong> {user.status}
            </p>
          </div>
          <div>
            <p>
              <strong>Auth Method:</strong> {user.authMethod}
            </p>
            <p>
              <strong>Role:</strong> {user.role}
            </p>
            <p>
              <strong>Total Trades:</strong> {user.totalTrades}
            </p>
            <p>
              <strong>Portfolio Value:</strong> {user.portfolioValue}
            </p>
          </div>
        </div>
        <Tabs defaultValue="financials">
          <TabsList>
            <TabsTrigger value="financials">Financials</TabsTrigger>
            <TabsTrigger value="positions">Positions</TabsTrigger>
            <TabsTrigger value="activity">Activity Log</TabsTrigger>
            <TabsTrigger value="orderbook">Order Book</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="financials">
            <CustomerFinancials userId={user.id} />
          </TabsContent>
          <TabsContent value="positions">
            <CustomerPositions userId={user.id} />
          </TabsContent>
          <TabsContent value="activity">
            <CustomerActivity userId={user.id} />
          </TabsContent>
          <TabsContent value="orderbook">
            <CustomerOrderbook userId={user.id} />
          </TabsContent>
          <TabsContent value="transactions">
            <CustomerTransactions userId={user.id} />
          </TabsContent>
          <TabsContent value="comments">
            <CustomerComments userId={user.id} />
          </TabsContent>
          <TabsContent value="settings">
            <CustomerSettings userId={user.id} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

