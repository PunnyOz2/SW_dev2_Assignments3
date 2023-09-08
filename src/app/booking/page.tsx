import LocationDateReserve from '@/components/LocationDateReserve'
import { Select, MenuItem, TextField, Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send'
import { blueGrey } from '@mui/material/colors'
export default function Home() {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 mt-3">
            <div className="w-fit space-y-6 m-5">
                <div className="text-3xl font-medium text-center">แบบฟอร์มสำหรับการจองวัคซีน</div>
                <div className='flex px-3 justify-between gap-2 flex-wrap'>
                    <div className="text-md text-left text-gray-600 grow">
                        ชื่อ:
                        <TextField id="" label="" variant='standard' size="small" hiddenLabel fullWidth/>
                    </div>
                    <div className="text-md text-left text-gray-600 grow">
                        นามสกุล:
                        <TextField id="" label="" variant='standard' size="small" hiddenLabel fullWidth/>
                    </div>
                </div>
                <div className="text-md text-left text-gray-600 px-3">
                        รหัสประจำตัวประชาชน:
                        <TextField id="" label="" variant='standard' size="small" hiddenLabel fullWidth/>
                </div>
                <div className="text-md text-left text-gray-600 px-3">
                    โรงพยาบาลที่ต้องการรับวัคซีน:
                    <Select variant="standard" name="location" id="location" className="h-[2em]" fullWidth>
                        <MenuItem value="chula">Chulalongkorn Hospital</MenuItem>
                        <MenuItem value="rajavithi">Rajavithi Hospital</MenuItem>
                        <MenuItem value="thammasat">Thammasat University Hospital</MenuItem>
                    </Select>
                </div>
                <div className="text-md text-left text-gray-600 px-3">
                    วันที่ต้องการรับวัคซีน
                    <LocationDateReserve />
                </div>
                <div className="flex justify-end px-3">
                    <Button variant="contained" color="success" size="large" endIcon={<SendIcon />} className='bg-green-600'>ยืนยันข้อมูล</Button>
                </div>
            </div>
        </main>
    )
}
