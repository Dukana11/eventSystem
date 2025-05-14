"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
  required?: boolean
}

function Label({ className, required, children, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "text-sm font-medium text-[#1A2053]",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-1">
        {required && <span className="text-red-500">*</span>}
        {children}
      </div>
    </LabelPrimitive.Root>
  )
}

export { Label }
