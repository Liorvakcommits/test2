import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"
import { GradientProgress } from "@/components/ui/gradient-progress"

interface PredictionCardProps {
  id: string
  title: string
  image: string
  price: number
  volume: number
  endDate: string
  priceChange: number
  chance: number
}

export function PredictionCard({ id, title, image, price, volume, endDate, priceChange, chance }: PredictionCardProps) {
  const formattedPrice = (price * 100).toFixed(0)
  const formattedPriceChange = (priceChange * 100).toFixed(2)
  const isPriceUp = priceChange >= 0

  return (
    <Link href={`/markets/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-video relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <div className="text-2xl font-bold">{formattedPrice}¢</div>
              <div className={`text-sm ${isPriceUp ? "text-green-600" : "text-red-600"} flex items-center`}>
                {isPriceUp ? <ArrowUpIcon size={16} /> : <ArrowDownIcon size={16} />}
                {formattedPriceChange}%
              </div>
            </div>
            <div className="text-right">
              <Badge variant="secondary" className="mb-1">
                ${volume.toLocaleString()} Vol.
              </Badge>
              <div className="text-sm text-gray-500">Ends {new Date(endDate).toLocaleDateString()}</div>
            </div>
          </div>
          <GradientProgress value={chance} className="mb-1" />
          <div className="text-sm text-gray-600 text-center">{chance}% chance</div>
        </CardContent>
      </Card>
    </Link>
  )
}

