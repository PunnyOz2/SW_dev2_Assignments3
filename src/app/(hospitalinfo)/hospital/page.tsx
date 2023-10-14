// import CardPanel from "@/components/CardPanel";
import getHostpitals from "@/libs/getHospitals"
import HospitalCatalog from "@/components/HospitalCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"

export default function Home() {
    const hospitals = getHostpitals()
    return (
        <main>
            <Suspense fallback={<p className="text-center">Loading ... <LinearProgress /></p>}>
                <HospitalCatalog hospitalJson={hospitals}/>
            </Suspense>
            {/* <CardPanel /> */}
        </main>
    )
}