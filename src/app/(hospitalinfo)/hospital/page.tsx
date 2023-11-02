// import CardPanel from "@/components/CardPanel";
import getHostpitals from "@/libs/getHospitals"
import HospitalCatalog from "@/components/HospitalCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import AddHospitalForm from "@/components/AddHospitalForm"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function Home() {
    const hospitals = getHostpitals()
    const session = await getServerSession(authOptions);
	const profile = session ? await getUserProfile(session.user.token) : null;
    return (
        <main>
            <Suspense fallback={<p className="text-center">Loading ... <LinearProgress /></p>}>
                <HospitalCatalog hospitalJson={hospitals}/>
            </Suspense>
            {/* <CardPanel /> */}
            {
				(profile?.data.role == "admin")?<AddHospitalForm/>:null
			}
        </main>
    )
}