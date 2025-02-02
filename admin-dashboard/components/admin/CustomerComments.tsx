import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockComments = [
  {
    id: 1,
    market: "Will AI surpass human intelligence by 2030?",
    comment: "I think it's possible, but not by 2030.",
    date: "2023-05-01",
  },
  {
    id: 2,
    market: "Will SpaceX launch Starship successfully in 2023?",
    comment: "They're making good progress, it could happen.",
    date: "2023-05-10",
  },
  {
    id: 3,
    market: "Will the Fed raise interest rates in Q3 2023?",
    comment: "Given current economic indicators, it seems likely.",
    date: "2023-05-15",
  },
]

export function CustomerComments({ userId }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Market</TableHead>
          <TableHead>Comment</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockComments.map((comment) => (
          <TableRow key={comment.id}>
            <TableCell>{comment.market}</TableCell>
            <TableCell>{comment.comment}</TableCell>
            <TableCell>{comment.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

