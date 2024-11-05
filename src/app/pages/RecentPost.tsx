import { Card } from "@/components/ui/card";

export default function RecentPost() {
  return (
    <Card className="bg-pink-200 rounded-lg shadow-lg p-6">
    
      <div className="flex justify-between items-center mb-4">
        <b className="text-xl">Recent Posts</b>
        <i className="text-pink-500 cursor-pointer hover:underline">View all</i>
      </div>

      
      <div className="flex gap-4">

        <Card className="bg-white rounded-lg shadow-sm p-4 flex-1">
          <b className="text-lg font-semibold">Making a design system from scratch</b>
          <h6 className="text-sm text-gray-500 mt-1">12 Feb 2020 | Design, Pattern</h6>
          <p className="text-gray-700 mt-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </Card>

        <Card className="bg-white rounded-lg shadow-sm p-4 flex-1">
          <b className="text-lg font-semibold">Building accessible UI components</b>
          <h6 className="text-sm text-gray-500 mt-1">15 Feb 2020 | Development, UI/UX</h6>
          <p className="text-gray-700 mt-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </Card>
      </div>
    </Card>
  );
}
