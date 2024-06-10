import { IoNotificationsOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const Navbar = (props) => {
  
  return <>
    <div className="w-full flex h-[10%] border-2 justify-center items-center relative bg-white">
        <span className=" absolute left-5 text-blue-600 font-semibold text-2xl">CareerNavigator</span>
        <div className="flex gap-8">
            <a href="/" className=" font-semibold">Home</a>
            <a href="/" className=" font-semibold">Post Job</a>
        </div>
        <div className="flex absolute right-4 gap-3 items-center">
            <IoNotificationsOutline className="text-2xl"/>
            <div className="flex gap-2 items-center">
                <img src="https://firebasestorage.googleapis.com/v0/b/otp-project-329ec.appspot.com/o/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg?alt=media&token=e4c41b95-81fc-4509-a6ff-b54744cad9d1" alt="" className=" h-8 w-8 rounded-2xl" />
                <span className="text-1xl">{props.cmp.cpm}</span>
                <FaChevronDown className="text-1xl"/>
            </div>
        </div>
    </div>
  </>
};

export default Navbar;