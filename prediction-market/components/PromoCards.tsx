import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react"

export function PromoCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
      <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4 mb-4">
            <TrendingUp className="h-8 w-8" />
            <h3 className="text-xl font-semibold">Trade with Confidence</h3>
          </div>
          <p className="mb-4 text-blue-100">Access real-time market data and make informed decisions</p>
          <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
            Start Trading <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="h-8 w-8" />
            <h3 className="text-xl font-semibold">Secure Platform</h3>
          </div>
          <p className="mb-4 text-purple-100">Trade with peace of mind on our secure and regulated platform</p>
          <Button variant="secondary" className="bg-white text-purple-600 hover:bg-purple-50">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white lg:col-span-1 md:col-span-2">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4 mb-4">
            <Zap className="h-8 w-8" />
            <h3 className="text-xl font-semibold">Quick Settlements</h3>
          </div>
          <p className="mb-4 text-green-100">Instant deposits and withdrawals with our automated system</p>
          <Button variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

