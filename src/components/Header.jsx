import { HiSearch } from "react-icons/hi";
import { HiOutlineBell, HiOutlineCog6Tooth, HiOutlineEnvelope, HiMiniSquares2X2 } from "react-icons/hi2";


function Header() {
  return (
    <nav className="bg-gray-900 flex justify-between p-4" >
      <div className="flex gap-4 items-center">
        <HiMiniSquares2X2 className="block lg:hidden h-8 w-8 bg-gray-900 fill-sky-500 " />
        <form className="max-w-md mx-auto">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <HiSearch className="w-6 h-6 text-gray-500"/>
            </div>
            <input type="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-700 rounded-lg bg-gray-900" placeholder="Search" required />

          </div>
        </form>
      </div>
      <div className="flex items-center gap-2 ">
       <HiOutlineEnvelope className=" bg-slate-600 p-2 stroke-white h-9 w-9 rounded-full"/>
       <HiOutlineCog6Tooth className=" bg-slate-600 p-2 stroke-white h-9 w-9 rounded-full"/>
       <HiOutlineBell className=" bg-slate-600 p-2 stroke-white h-9 w-9 rounded-full"/>       
       <img className="rounded-full h-8 w-8" src="/person4.jpg" />
      </div>
    </nav>
    
  );
}
export default Header;