"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { useState } from "react"
import { Dayjs } from "dayjs"
// import { Select, MenuItem } from "@mui/material"

export default function DateReserve({onDateChange}: {onDateChange:Function}) {
    const [bookingDate, setBookingDate] = useState<Dayjs|null>(null)
    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 px-10 py-5 flex-row justify-center w-full">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="w-full"
                    label="Date"
                    value={bookingDate}
                    onChange={(value)=>{setBookingDate(value); onDateChange(value)}}
                />
            </LocalizationProvider>
        </div>
    )
}