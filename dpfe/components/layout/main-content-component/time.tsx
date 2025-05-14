"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FormLabel } from "@/components/ui/form"

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">  Цаг </Button>
        {/* <FormLabel required> Эхлэх огноо </FormLabel> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value="top">12:00</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">13:00</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">14:00</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="top">15:00</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">16:00</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">17:00</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
