import Link from "next/link";

export default function Navbar(){
    return(
    <nav className="bg-white border-white-200 dark:bg-white-900">
        <div className="flex flex-wrap text-black justify-between items-center mx-auto max-w-screen-xl p-4">
            <Link href="/" >Home</Link>
            <Link href="/blog">Blogs</Link>
            <Link href="/contact">Contact</Link>
        </div>      
    </nav>
    )
}