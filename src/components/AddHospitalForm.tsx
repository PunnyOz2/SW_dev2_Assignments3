import { dbConnect } from "@/db/dbConnect"
import Hospital from "@/db/models/Hospital"
import { Button, TextField } from "@mui/material"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import SendIcon from '@mui/icons-material/Send'

export default function AddHospitalForm() {
	const addHospital = async (addHospital: FormData) => {
		"use server"
		const name = addHospital.get("name")
		const address = addHospital.get("address")
		const district = addHospital.get("district")
		const province = addHospital.get("province")
		const postalcode = addHospital.get("postalcode")
		const tel = addHospital.get("tel")
		const picture = addHospital.get("picture")

		try {
			await dbConnect()
			const hospital = await Hospital.create({
				name,
				address,
				district,
				province,
				postalcode,
				tel,
				picture
			})
		} catch (error) {
			console.log(error)
		}
		revalidateTag("hospitals")
		redirect("/hospital")
	}

	return (
		<div className="flex items-center justify-center w-full">
			<form action={addHospital} className="flex flex-col items-center justify-center w-3/5 h-full bg-gray-100 rounded-xl space-y-2 px-10 py-5">
				<div className="text-xl font-bold">Add Hospital Form</div>
				<div className="flex items-center w-full my-2">
					<label className="w-1/4 block text-gray-700 pr-2" htmlFor="name">Hospital name</label>
					<input type="text" required id="name" name="name" placeholder=""
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700"/>
				</div>
				<div className="flex items-center w-full my-2">
					<label className="w-1/4 block text-gray-700 pr-2" htmlFor="address">Address</label>
					<input type="text" required id="address" name="address" placeholder=""
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700"/>
				</div>
				<div className="flex items-center w-full my-2">
					<label className="w-1/4 block text-gray-700 pr-2" htmlFor="district">District</label>
					<input type="text" required id="district" name="district" placeholder=""
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700"/>
				</div>
				<div className="flex items-center w-full my-2">
					<label className="w-1/4 block text-gray-700 pr-2" htmlFor="province">Province</label>
					<input type="text" required id="province" name="province" placeholder=""
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700"/>
				</div>
				<div className="flex items-center w-full my-2">
					<label className="w-1/4 block text-gray-700 pr-2" htmlFor="postalcode">Postal Code</label>
					<input type="text" required id="postalcode" name="postalcode" placeholder=""
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700"/>
				</div>
				<div className="flex items-center w-full my-2">
					<label className="w-1/4 block text-gray-700 pr-2" htmlFor="tel">Tel.</label>
					<input type="text" required id="tel" name="tel" placeholder=""
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700"/>
				</div>
				<div className="flex items-center w-full my-2">
					<label className="w-1/4 block text-gray-700 pr-2" htmlFor="picture">Picture</label>
					<input type="text" required id="picture" name="picture" placeholder=""
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700"/>
				</div>
				<div className="flex justify-end px-3 w-full">
					<Button type="submit" variant="contained" color="success" size="large" endIcon={<SendIcon />} className='bg-green-600'>
						Add
					</Button>
				</div>
			</form>
		</div>
	)
}