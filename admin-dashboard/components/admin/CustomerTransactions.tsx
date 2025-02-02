import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockTransactions = [
  { id: 1, type: "Deposit", amount: "$1000", date: "2023-05-01" },
  { id: 2, type: "Withdrawal", amount: "$500", date: "2023-05-10" },
  { id: 3, type: "Trade", market: "Will AI surpass human intelligence by 2030?", amount: "$200", date: "2023-05-15" },
]

export function CustomerTransactions({ userId }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Details</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockTransactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{transaction.type}</TableCell>
            <TableCell>{transaction.market || "-"}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>{transaction.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

