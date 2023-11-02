import UserDashboard from '@/components/UserDashboard'
import Form from "@/components/Form"
import getHospitals from '@/libs/getHospitals';

export default async function Home() {
    const hospitals = await getHospitals();
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 mt-3">
            <UserDashboard />
            <Form hospitals={hospitals}/>
        </main>
    )
}
