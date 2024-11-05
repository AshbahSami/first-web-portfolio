import { Card } from "@/components/ui/card";

export default function Work(){
    return(
        <div>
           <b className="flex px-6 py-4"> Featured Work</b>
           <Card className="rounded-lg shadow-pink-500 flex h-auto w-auto">
            <img src="/Rectangle 30.png" alt="work" className=" px-2 py-1 rounded-lg  shadow-sm "/>
           <div className="px-2 py-4 flex-1 ">
           <b>Designing Dashboards</b>
           <div className="py-1 flex gap-4">
           <button className="bg-pink-300 mt-1 justify-center rounded-lg px-2 ">2020</button>
           <p className="text-sm text-gray-500 mt-1">DashBoard</p>
           </div>
           <p>
           Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit. Exercitation veniam
             consequat sunt nostrud amet.
           </p>
           </div>
           
           </Card>
           <Card className="rounded-lg shadow-pink-500 flex h-auto w-auto">
            <img src="/Rectangle 32.png" alt="work" className=" px-2 py-1 rounded-lg  shadow-sm "/>
            <div className="px-2 py-4 flex-1 ">
           <b>Designing Dashboards</b>
           <div className="py-1 flex gap-4">
           <button className="bg-pink-300 mt-1 justify-center rounded-lg px-2 ">2020</button>
           <p className="text-sm text-gray-500 mt-1">DashBoard</p>
           </div>
           <p>
           Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit. Exercitation veniam
             consequat sunt nostrud amet.
           </p>
           </div>
           </Card>
           <Card className="rounded-lg shadow-pink-500 flex h-auto w-auto">
            <img src="/Rectangle 34.png" alt="work" className=" px-2 py-1 rounded-lg  shadow-sm "/>
            <div className="px-2 py-4 flex-1 ">
           <b>Designing Dashboards</b>
           <div className="py-1 flex gap-4">
           <button className="bg-pink-300 mt-1 justify-center rounded-lg px-2 ">2020</button>
           <p className="text-sm text-gray-500 mt-1">DashBoard</p>
           </div>
           <p>
           Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit. Exercitation veniam
             consequat sunt nostrud amet.
           </p>
           </div>
           </Card>
        </div>
    )
}