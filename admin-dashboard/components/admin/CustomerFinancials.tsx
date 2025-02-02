import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  PiggyBank,
  ArrowDownLeft,
  Receipt,
  BarChart2,
  Layout,
} from "lucide-react"

export function CustomerFinancials({ userId }) {
  // This would typically fetch data based on the userId
  const financials = {
    availableBalance: "$5,000",
    depositTotal: "$20,000",
    withdrawalTotal: "$7,655",
    feesPaid: "$234.56",
    mostTradedMarket: "Crypto",
    openPositions: 5,
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-blue-700 dark:text-blue-300 flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              Available Balance
            </CardTitle>
            <ArrowUpRight className="h-5 w-5 text-green-600" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-blue-900 dark:text-blue-50">{financials.availableBalance}</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-green-700 dark:text-green-300 flex items-center gap-2">
              <PiggyBank className="h-5 w-5" />
              Total Deposits
            </CardTitle>
            <ArrowUpRight className="h-5 w-5 text-green-600" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-green-900 dark:text-green-50">{financials.depositTotal}</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-orange-700 dark:text-orange-300 flex items-center gap-2">
              <ArrowDownLeft className="h-5 w-5" />
              Total Withdrawals
            </CardTitle>
            <ArrowDownRight className="h-5 w-5 text-orange-600" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-orange-900 dark:text-orange-50">{financials.withdrawalTotal}</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-purple-700 dark:text-purple-300 flex items-center gap-2">
              <Receipt className="h-5 w-5" />
              Fees Paid
            </CardTitle>
            <ArrowDownRight className="h-5 w-5 text-purple-600" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-purple-900 dark:text-purple-50">{financials.feesPaid}</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 border-pink-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-pink-700 dark:text-pink-300 flex items-center gap-2">
              <BarChart2 className="h-5 w-5" />
              Most Traded Market
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-pink-900 dark:text-pink-50">{financials.mostTradedMarket}</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 border-cyan-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-cyan-700 dark:text-cyan-300 flex items-center gap-2">
              <Layout className="h-5 w-5" />
              Open Positions
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-cyan-900 dark:text-cyan-50">{financials.openPositions}</p>
        </CardContent>
      </Card>
    </div>
  )
}

