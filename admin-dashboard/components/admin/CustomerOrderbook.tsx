import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockOrders = [
  {
    id: 1,
    market: "Will AI surpass human intelligence by 2030?",
    type: "Buy",
    amount: "$500",
    price: "0.65",
    status: "Open",
  },
  {
    id: 2,
    market: "Will SpaceX launch Starship successfully in 2023?",
    type: "Sell",
    amount: "$300",
    price: "0.45",
    status: "Filled",
  },
  {
    id: 3,
    market: "Will the Fed raise interest rates in Q3 2023?",
    type: "Buy",
    amount: "$700",
    price: "0.55",
    status: "Cancelled",
  },
]

export function CustomerOrderbook({ userId }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Market</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockOrders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.market}</TableCell>
            <TableCell>{order.type}</TableCell>
            <TableCell>{order.amount}</TableCell>
            <TableCell>{order.price}</TableCell>
            <TableCell>{order.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

