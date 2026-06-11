interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-bright
        text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${className}`}
    >
      {children}
    </span>
  )
}
