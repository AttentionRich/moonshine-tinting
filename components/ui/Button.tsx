import Link from "next/link"
import { type ComponentPropsWithoutRef } from "react"

type ButtonVariant = "filled" | "outlined" | "ghost"
type ButtonSize = "sm" | "md" | "lg"

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

type ButtonAsButton = ButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined }

type ButtonAsLink = ButtonBaseProps & { href: string; children: React.ReactNode; className?: string; target?: string; rel?: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-xs min-h-[44px]",
  md: "px-6 py-3 text-sm min-h-[44px]",
  lg: "px-8 py-3.5 text-base min-h-[44px]",
}

const variantClasses: Record<ButtonVariant, string> = {
  filled:
    "bg-brand-blue text-white hover:bg-brand-blue-dark hover:shadow-[0_0_24px_rgba(63,111,175,0.45)] hover:-translate-y-0.5 focus-visible:ring-brand-blue",
  outlined:
    "border border-white/25 text-white hover:bg-white hover:text-background hover:border-white focus-visible:ring-white",
  ghost:
    "text-brand-blue-bright hover:text-white focus-visible:ring-brand-blue",
}

export default function Button({ variant = "filled", size = "md", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium tracking-wide rounded-full transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50"
  const classes = `${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  if ("href" in props && props.href !== undefined) {
    const { href, children, target, rel, ...rest } = props as ButtonAsLink
    return (
      <Link href={href} className={classes} target={target} rel={rel} {...(rest as object)}>
        {children}
      </Link>
    )
  }

  const { children, ...rest } = props as ButtonAsButton
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
