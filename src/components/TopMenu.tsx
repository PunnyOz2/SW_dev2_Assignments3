import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function TopMenu() {
    const session = await getServerSession(authOptions)
    return (
        <div className='h-[50px] bg-white fixed inset-x-0 top-0 z-30 border-t-lightgray border-b-lightgray flex'>
            {
                session? <Link href='/api/auth/signout'>
                    <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
                    Sign-Out of {session.user?.name}</div></Link>
                : <Link href='/api/auth/signin'>
                    <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
                    Sign-In</div></Link>
            }
            <div className='h-full grow flex flex-row justify-end'>
                <TopMenuItem title='Booking' pageRef='/booking'/>
                <Link href='/'>
                    <Image src={'/img/logo.png'} className='h-full w-auto' alt='logo' width={0} height={0} sizes='100vh'/>
                </Link>
            </div>
        </div>
    );
}