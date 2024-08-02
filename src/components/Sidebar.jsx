
import { HiHome, HiOutlineChartSquareBar, HiOutlineClipboardCheck, } from "react-icons/hi";
import { HiOutlineWallet, HiOutlineShoppingBag, HiMiniSquares2X2 } from "react-icons/hi2";

function Sidebar() {

  return (
    <nav className="bg-gray-900 lg:h-screen min-w-[74px]" >

      <HiMiniSquares2X2 className="h-8 w-8 fill-sky-500 m-5" />
      <div className="hidden lg:flex lg:flex-col">
        <div className="flex flex-col gap-4 hover:border-l-2 border-sky-500 my-4 ">
          <HiHome className="h-8 w-8 fill-white hover:fill-sky-500 mx-5 " />
        </div>
        <div className="flex flex-col gap-4 hover:border-l-2 border-sky-500 my-4 ">

          <HiOutlineChartSquareBar className="h-8 w-8 stroke-white hover:stroke-sky-500 mx-5 " />
        </div>
        <div className="flex flex-col gap-4 hover:border-l-2 border-sky-500 my-4 ">
          <HiOutlineClipboardCheck className="h-8 w-8 stroke-white hover:stroke-sky-500 mx-5" />
        </div>
        <div className="flex flex-col gap-4 hover:border-l-2 border-sky-500 my-4 ">
          <HiOutlineWallet className="h-8 w-8 stroke-white hover:stroke-sky-500 mx-5" />
        </div>

        <div className="flex flex-col gap-4 hover:border-l-2 border-sky-500 my-4 ">
          <HiOutlineShoppingBag className="h-8 w-8 stroke-white hover:stroke-sky-500 mx-5" />
        </div>

      </div>
    </nav>
  );
}

export default Sidebar;