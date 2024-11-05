import Link from "next/link";

export default function Footer(){
    return(
        <div>
            <div className="px-4 py-6 flex justify-center">
            <Link href="www.facebook.com" className="px-2">
            <img src="fb.png" alt="facebook" />
            </Link>
            <Link href="www.instagram.com"className="px-2">
            <img src="insta.png" alt="insta"/>
            </Link>
            <Link href="www.twitter.com" className="px-2">
            <img src="Vector.png" alt="twitter"/>
            </Link>
            <Link href="www.linkedin.com" className="px-2">
            <img src=" Linkedin.png" alt="linkedin"/>
            </Link>            
        </div>
        <p className="px-2 justify-center flex py-4 text-gray-300">Copyright ©2020 All rights reserved </p>
        </div>
        
    )
}