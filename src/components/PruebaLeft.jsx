import React,{useState} from 'react'
import { AiFillLock, AiOutlineMail, AiOutlineAreaChart,AiOutlineHome, AiOutlineLeftCircle,AiOutlineRobot } from 'react-icons/ai';

const PruebaLeft = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: <AiOutlineHome/> },
        { title: "Inbox", src: <AiOutlineAreaChart/> },
        { title: "Accounts", src: <AiOutlineAreaChart/>, gap: true },
        { title: "Schedule ", src: <AiFillLock/> },
        { title: "Search", src: <AiOutlineMail/> },

      ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-48" : "w-20 "
        } bg-third h-screen p-5  pt-8 relative duration-300 rounded-lg`}
      >
        
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
        <AiOutlineRobot className={`text-gray-300 text-lg cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}/>
 
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Usuario
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >

              <span className={`origin-left duration-200 text-lg`}>
                {Menu.src}
              </span>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  )
}

export default PruebaLeft