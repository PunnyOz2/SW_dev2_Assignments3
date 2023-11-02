import Link from 'next/link';

export default function TopMenuItem({title, pageRef}: {title: string, pageRef: string}) {
    return (
        <Link href={pageRef} className='w-fit mx-5 text-center my-auto font-serif text-2xl text-gray-500'>
            {title}
        </Link>
    );
}