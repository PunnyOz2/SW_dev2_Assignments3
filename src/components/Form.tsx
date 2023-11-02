'use client'
import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { AppDispatch } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'next/navigation'
import { BookingItem } from '../../interface'
import { updateBooking } from '@/redux/features/bookSlice'
import DateReserve from '@/components/DateReserve'
import { Select, MenuItem, TextField, Button, SelectChangeEvent } from "@mui/material"
import SendIcon from '@mui/icons-material/Send'
export default function Form({hospitals}: {hospitals: Object}){
    const searchParams = useSearchParams()
    const hid = searchParams.get('hid')
    const hospitalName = searchParams.get('hospitalName')

    const [firstName, setFirstName] = useState<string>('')
	const [lastName, setLastName] = useState<string>('')
	const [ssn, setSSN] = useState<string>('')
	const [selectedDate, setSelectedDate] = useState<Dayjs|null>(null)
	const [selectedHospital, setSelectedHospital] = useState<string>(hospitalName?hospitalName:'')

    const dispatch = useDispatch<AppDispatch>()

    const createBooking = () => {
		if( firstName && lastName && ssn && selectedDate && selectedHospital){
			const item: BookingItem = {
				firstName: firstName,
				lastName: lastName,
				ssn: ssn,
				selectedDate: dayjs(selectedDate).format('YYYY/MM/DD'),
				selectedHospital: selectedHospital
			}
			dispatch(updateBooking(item))
		}
	}
    return(
        <div className="w-fit space-y-6 m-5">
                <div className="text-3xl font-medium text-center">แบบฟอร์มสำหรับการจองวัคซีน</div>
                <div className='flex px-3 justify-between gap-2 flex-wrap'>
                    <div className="text-md text-left text-gray-600 grow">
                        ชื่อ:
                        <TextField required id="" label="" variant='standard' size="small" hiddenLabel fullWidth
                        value={firstName} 
                        onChange={(value)=>{setFirstName(value.target.value);}}
                        />
                    </div>
                    <div className="text-md text-left text-gray-600 grow">
                        นามสกุล:
                        <TextField required id="" label="" variant='standard' size="small" hiddenLabel fullWidth
                        value={lastName} 
                        onChange={(value)=>{setLastName(value.target.value);}}
                        />
                    </div>
                </div>
                <div className="text-md text-left text-gray-600 px-3">
                        รหัสประจำตัวประชาชน:
                        <TextField required id="" label="" variant='standard' size="small" hiddenLabel fullWidth
                        value={ssn} 
                        onChange={(value)=>{setSSN(value.target.value);}}
                        />
                </div>
                <div className="text-md text-left text-gray-600 px-3">
                    โรงพยาบาลที่ต้องการรับวัคซีน:
                    <Select variant="standard" name="location" id="location" className="h-[2em]" fullWidth 
                    onChange={(event: SelectChangeEvent)=>{setSelectedHospital(event.target.value)}} value={selectedHospital} required>
                        {
                            hospitals.data.map((hospital)=>(
                            <MenuItem key={hospital.id} value={hospital.name}>
                                {hospital.name}
                            </MenuItem>
					        ))
                        }
                    </Select>
                </div>
                <div className="text-md text-left text-gray-600 px-3">
                    วันที่ต้องการรับวัคซีน
                    <DateReserve onDateChange={(value:Dayjs)=>{setSelectedDate(value)}}/>
                </div>

                <div className="flex justify-end px-3">
                    <Button variant="contained" color="success" size="large" endIcon={<SendIcon />} className='bg-green-600'
                    onClick={createBooking}>ยืนยันข้อมูล</Button>
                </div>
            </div>
    )
}