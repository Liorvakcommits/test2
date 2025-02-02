import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const topTraders = [
  {
    user: "John Doe",
    trades: 156,
    volume: "$234,567",
    winRate: "68%",
    status: "Active",
  },
  {
    user: "Jane Smith",
    trades: 132,
    volume: "$198,432",
    winRate: "72%",
    status: "Active",
  },
  {
    user: "Bob Johnson",
    trades: 98,
    volume: "$176,890",
    winRate: "65%",
    status: "Active",
  },
  {
    user: "Alice Brown",
    trades: 87,
    volume: "$143,567",
    winRate: "70%",
    status: "Active",
  },
  {
    user: "Charlie Wilson",
    trades: 76,
    volume: "$132,456",
    winRate: "62%",
    status: "Active",
  },
]

export function TopTraders() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Trades</TableHead>
          <TableHead>Volume</TableHead>
          <TableHead>Win Rate</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topTraders.map((trader) => (
          <TableRow key={trader.user}>
            <TableCell className="font-medium">{trader.user}</TableCell>
            <TableCell>{trader.trades}</TableCell>
            <TableCell>{trader.volume}</TableCell>
            <TableCell>{trader.winRate}</TableCell>
            <TableCell>
              <Badge variant="success">{trader.status}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

