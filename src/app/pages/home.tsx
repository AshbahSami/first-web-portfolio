import { Card } from "@/components/ui/card";
import Image from "next/image";
export default function Home() {
   return (
      <div>
         <div className="justify-between px-2 py-3 flex flex-col">
            <Card className="bg-pink-50 rounded-lg shadow-pink-300">
               <div className="flex flex-wrap text-black justify-between items-center mx-auto max-w-screen-xl p-4">
                  <div className="flex-1">
                     <b className="text-4xl">Hi, I am John, Creative Technologist</b>
                     <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                     </p>
                     <button className="bg-pink-500 text-white rounded-lg px-6 py-3">
                     Download Resume
                     </button>
                  </div>
                  <img className="w-64 h-auto rounded-lg items-center text-white " src="/hero-image.png" alt="profile-pic" />
               </div>
            </Card>
         </div>
      </div>
   );
}
