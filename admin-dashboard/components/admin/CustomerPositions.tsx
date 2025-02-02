import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockPositions = [
  { id: 1, market: "Will AI surpass human intelligence by 2030?", position: "Yes", amount: "$500", profitLoss: "+$50" },
  {
    id: 2,
    market: "Will SpaceX launch Starship successfully in 2023?",
    position: "No",
    amount: "$300",
    profitLoss: "-$30",
  },
  {
    id: 3,
    market: "Will the Fed raise interest rates in Q3 2023?",
    position: "Yes",
    amount: "$700",
    profitLoss: "+$100",
  },
]

export function CustomerPositions({ userId }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Market</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Profit/Loss</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockPositions.map((position) => (
          <TableRow key={position.id}>
            <TableCell>{position.market}</TableCell>
            <TableCell>{position.position}</TableCell>
            <TableCell>{position.amount}</TableCell>
            <TableCell>{position.profitLoss}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

