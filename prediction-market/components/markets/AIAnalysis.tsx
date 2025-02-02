"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowRight, RefreshCw } from "lucide-react"

interface AIAnalysisProps {
  marketQuestion: string
}

export function AIAnalysis({ marketQuestion }: AIAnalysisProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleRefreshAnalysis = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-lg">AI Market Analysis</h3>
            </div>
            <p className="text-sm text-gray-500">Powered by Perplexity AI</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleRefreshAnalysis} disabled={isLoading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
            Refresh Analysis
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
            <div className="flex-1">
              <p className="text-sm font-medium mb-2">Market Question</p>
              <p className="text-gray-600">{marketQuestion}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 mt-1" />
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium mb-2">Key Factors</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">International Relations</Badge>
                <Badge variant="secondary">Political Climate</Badge>
                <Badge variant="secondary">Historical Precedent</Badge>
                <Badge variant="secondary">Media Coverage</Badge>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium mb-2">Analysis</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Based on current geopolitical trends and historical data, this meeting has several key considerations:
                1. Recent diplomatic developments suggest increasing possibility of dialogue 2. Historical patterns show
                similar meetings occurred during previous administrations 3. Media reports indicate potential
                intermediaries working to facilitate such a meeting 4. Current market sentiment (54%) aligns with
                analytical probability models
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium mb-2">Confidence Score</h4>
              <div className="flex items-center gap-4">
                <div className="w-full bg-gray-100 rounded-full h-4">
                  <div className="bg-blue-500 h-4 rounded-full" style={{ width: "65%" }} />
                </div>
                <span className="text-sm font-medium">65%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

