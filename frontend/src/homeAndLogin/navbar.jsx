
const Navbar = () => {
  
  return <>
    <div className="w-full flex h-[10%] border-2 justify-center items-center relative bg-white">
        <span className=" absolute left-5 text-blue-600 font-semibold text-2xl">CareerNavigator</span>
        <div className="flex gap-8">
            <a href="/" className=" font-semibold">Home</a>
            <a href="/" className=" font-semibold">About us</a>
            <a href="/" className=" font-semibold">Contact us</a>
        </div>
    </div>
  </>
};

export default Navbar;