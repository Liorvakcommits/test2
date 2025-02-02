import type * as React from "react"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return <div className={`bg-white rounded-lg shadow ${className}`} {...props} />
}

export function CardHeader({ className, ...props }: CardProps) {
  return <div className={`p-6 ${className}`} {...props} />
}

export function CardTitle({ className, ...props }: CardProps) {
  return <h3 className={`text-lg font-semibold ${className}`} {...props} />
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={`p-6 pt-0 ${className}`} {...props} />
}

