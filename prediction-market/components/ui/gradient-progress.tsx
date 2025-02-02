interface GradientProgressProps {
  value: number
  className?: string
}

export function GradientProgress({ value, className = "" }: GradientProgressProps) {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2.5 ${className}`}>
      <div
        className="h-2.5 rounded-full transition-all duration-500"
        style={{
          width: `${value}%`,
          background: `linear-gradient(to right, 
            ${value <= 50 ? `rgb(239 68 68), rgb(234 179 8)` : `rgb(234 179 8), rgb(34 197 94)`}
          )`,
        }}
      />
    </div>
  )
}

