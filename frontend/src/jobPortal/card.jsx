import { IoLocationOutline } from "react-icons/io5";

function Card(){
    return <>
        <div className="bg-white p-6 flex-col mb-4 cursor-pointer rounded-md">
            <div className="flex gap-4 items-center">
                <img src="https://firebasestorage.googleapis.com/v0/b/otp-project-329ec.appspot.com/o/x-logo-twitter-elon-musk_dezeen_2364_col_0.webp?alt=media&token=46a652da-1ad1-4f39-a15e-b1fa4f376951" alt="" className="w-10 h-10"/>
                <div className="flex-col gap-0">
                    <p className="font-bold">Senior Software Engineer</p>
                    <span className="text-xs font-semibold">Twitter, Inc.</span>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor placeat, esse, deleniti delectus aliquam...</p>
            </div>

            <div className="flex gap-3 mt-4">
                <span className="text-sm bg-blue-100 text-blue-600 w-24 h-8 rounded-2xl flex justify-center items-center">Full Time</span>
                <span className="text-sm bg-blue-100 text-blue-600 w-24 h-8 rounded-2xl flex justify-center items-center">Entry Level</span>
                <span className="text-sm bg-blue-100 text-blue-600 w-24 h-8 rounded-2xl flex justify-center items-center">On Site</span>
            </div>

            <div className="mt-4 border-t relative flex items-center pt-4 opacity-60">
                <div className="flex items-center absolute left-0">
                    <IoLocationOutline className="text-sm"/>
                    <span className="text-sm">India,Bengaluru</span>
                </div>
                <span className="absolute right-0 text-sm">Postes 8hrs ago</span>
            </div>
        </div>

    </>
}

export default Card