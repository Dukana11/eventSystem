import * as React from "react"
import { cn } from "@/lib/utils"

interface InputWithLabelProps extends React.ComponentProps<"input"> {
  label: string
  id: string
  className?: string
  required?: boolean 
}

function Input({ label, id, className, type = "text", required, ...props }: InputWithLabelProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-sm font-medium text-[#1A2053] flex items-center gap-1">
        {required && <span className="text-red-500">*</span>} {/* required бол * харуулах */}
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required} 
        className={cn(
          "mt-1 file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
    </div>
  )
}

export { Input }
