import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const topWinners = [
  { name: "John Doe", profit: "$12,345", trades: 156 },
  { name: "Jane Smith", profit: "$10,678", trades: 132 },
  { name: "Bob Johnson", profit: "$9,876", trades: 98 },
]

const topLosers = [
  { name: "Eve Taylor", loss: "$5,432", trades: 65 },
  { name: "Frank Miller", loss: "$4,321", trades: 54 },
  { name: "Grace Lee", loss: "$3,210", trades: 43 },
]

export function MostProfitableUsers() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Top Winners</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Profit</TableHead>
              <TableHead>Trades</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topWinners.map((user) => (
              <TableRow key={user.name}>
                <TableCell>{user.name}</TableCell>
                <TableCell className="text-green-600">{user.profit}</TableCell>
                <TableCell>{user.trades}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Top Losers</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Loss</TableHead>
              <TableHead>Trades</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topLosers.map((user) => (
              <TableRow key={user.name}>
                <TableCell>{user.name}</TableCell>
                <TableCell className="text-red-600">-{user.loss}</TableCell>
                <TableCell>{user.trades}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

