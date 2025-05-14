import { TimePicker } from "@/components/ui/time-picker";
import { CalendarForm } from "@/components/layout/main-content-component/calendar-form";
import { Button } from "@/components/ui/button";
import * as React from "react";

interface DatetimeInput {
    date: string;
    startTime: Date | null;
    endTime: Date | null;
}

export default function Datetime() {
    const [datetimeInputs, setDatetimeInputs] = React.useState<DatetimeInput[]>([
        { date: "", startTime: null, endTime: null },
    ]);

    const handleTimeChange = (index: number, type: "startTime" | "endTime", value: Date | null) => {
        const updated = [...datetimeInputs];
        updated[index][type] = value;
        setDatetimeInputs(updated);
    };

    const handleAddDatetime = () => {
        setDatetimeInputs([...datetimeInputs, { date: "", startTime: null, endTime: null }]);
    };

    return (
        <div className="flex gap-5">
            <div>
                {datetimeInputs.map((item, index) => (
                    <div key={index} className="flex gap-4 items-center mt-5">
                        <CalendarForm /> {/* Та энэ component-г дотор нь index-р хянаж customize хийж болно */}
                        <TimePicker
                            label="Эхлэх цаг"
                            selectedTime={item.startTime}
                            onChange={(value) => handleTimeChange(index, "startTime", value)}
                        />
                        <TimePicker
                            label="Дуусах цаг"
                            selectedTime={item.endTime}
                            onChange={(value) => handleTimeChange(index, "endTime", value)}
                        />
                    </div>
                ))}
            </div>
            <div>
                <Button onClick={handleAddDatetime} className="w-[40px]">
                    +
                </Button>
            </div>
        </div>
    );
}
