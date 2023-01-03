import Link from 'next/link'

export default function Navigation() {
    return (
        <>
            <div className="flex flex-row text-white py-4 w-full  justify-end		">
                <Link className='mr-4' href="/">About</Link>
                <Link href="/projects">Projects</Link>
            </div>
        </>
    )
}