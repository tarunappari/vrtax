"use client"

import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*                                Button Base                                 */
/* -------------------------------------------------------------------------- */

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-primary-foreground hover:bg-destructive/90",
        cool: "dark:inset-shadow-2xs dark:inset-shadow-white/10 bg-linear-to-t border border-b-2 border-zinc-950/40 from-primary to-primary/85 shadow-md shadow-primary/20 ring-1 ring-inset ring-white/25 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-x-0 text-primary-foreground dark:text-primary-foreground dark:border-t-0 dark:border-primary/50 dark:ring-white/5",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

/* -------------------------------------------------------------------------- */
/*                              Liquid Button                                 */
/* -------------------------------------------------------------------------- */

const liquidbuttonVariants = cva(
  "inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:scale-105 duration-300 transition text-primary",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 text-xs gap-1.5 px-4 has-[>svg]:px-4",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-12 rounded-md px-8 has-[>svg]:px-6",
        xxl: "h-14 rounded-md px-10 has-[>svg]:px-8",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xxl",
    },
  }
)

function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(
        "relative",
        liquidbuttonVariants({ variant, size, className })
      )}
      {...props}
    >
      <div className="absolute top-0 left-0 z-0 h-full w-full rounded-full shadow-lg" />
      <div className="pointer-events-none z-10">{children}</div>
      <GlassFilter />
    </Comp>
  )
}

function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter id="container-glass">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
          />
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
    </svg>
  )
}

/* -------------------------------------------------------------------------- */
/*                               Metal Button                                 */
/* -------------------------------------------------------------------------- */

const colorVariants = {
  default: {
    outer: "bg-gradient-to-b from-black to-gray-400",
    inner: "bg-gradient-to-b from-gray-100 via-gray-700 to-gray-200",
    button: "bg-gradient-to-b from-gray-300 to-gray-500",
    textColor: "text-white",
    textShadow: "",
  },
  primary: {
    outer: "bg-gradient-to-b from-black to-gray-400",
    inner: "bg-gradient-to-b from-primary via-secondary to-muted",
    button: "bg-gradient-to-b from-primary to-primary/40",
    textColor: "text-white",
    textShadow: "",
  },
}

function ShineEffect({ isPressed }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 transition-opacity duration-300",
        isPressed ? "opacity-20" : "opacity-0"
      )}
    >
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white to-transparent" />
    </div>
  )
}

export const MetalButton = React.forwardRef(
  ({ children, className, variant = "default", ...props }, ref) => {
    const [isPressed, setIsPressed] = React.useState(false)
    const [isHovered, setIsHovered] = React.useState(false)
    const [isTouchDevice, setIsTouchDevice] = React.useState(false)

    React.useEffect(() => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      )
    }, [])

    const colors = colorVariants[variant] || colorVariants.default

    return (
      <div className={cn("relative inline-flex p-[2px]", colors.outer)}>
        <div className={cn("absolute inset-[1px] rounded-lg", colors.inner)} />
        <button
          ref={ref}
          className={cn(
            "relative z-10 px-6 py-2 rounded-md font-semibold",
            colors.button,
            colors.textColor,
            className
          )}
          {...props}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => {
            setIsPressed(false)
            setIsHovered(false)
          }}
          onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
        >
          <ShineEffect isPressed={isPressed} />
          {children || "Button"}
        </button>
      </div>
    )
  }
)

MetalButton.displayName = "MetalButton"

export { Button, buttonVariants, liquidbuttonVariants, LiquidButton }
