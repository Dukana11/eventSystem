"use client"

import * as React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { cn } from "@/lib/utils"

interface TimePickerProps {
  label: string
  selectedTime: Date | null
  onChange: (date: Date | null) => void
}

export const TimePicker: React.FC<TimePickerProps> = ({
  label,
  selectedTime,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-[#1A2053] mb-2">{label}</label>
      <DatePicker
        selected={selectedTime}
        onChange={onChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15} // 15 минутын интервалтай
        timeCaption="Цаг"
        dateFormat="h:mm aa" // Цагийг 12 цагийн форматаар харуулах
        className={cn("w-[200px] p-2 border rounded-md text-sm")}
        placeholderText="Цаг сонгоно уу"
      />
    </div>
  )
}
