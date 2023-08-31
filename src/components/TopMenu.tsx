import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import Link from 'next/link';
export default function TopMenu() {
    return (
        <div className='h-[50px] bg-white fixed inset-x-0 top-0 z-30 border-t-lightgray border-b-lightgray flex flex-row-reverse'>
            <Link href='/'>
                <Image src={'/img/logo.png'} className='h-full w-auto' alt='logo' width={0} height={0} sizes='100vh'/>
            </Link>
            <TopMenuItem title='Booking' pageRef='/booking'/>
        </div>
    );
}