
import logo from "../../../public/assets/Icons/logo.png"
import Image from "next/image"

import {BsSearch,BsCart3} from "react-icons/bs"

const Header = () =>{

    return(
        <div className="h-[102px] flex items-center px-8 justify-between">
            <div className="flex items-center">
                <Image src={logo} alt="logo"/>
                <p className="text-[#0D3E66] text-[20px] font-extrabold ml-4" >PLANE B</p>
            </div>
            <div>
                <ul className="list-none flex">
                    <li className="text-[#2B2E30] text-[14px] mr-4">About Us</li>
                    <li className="text-[#2B2E30] text-[14px] mr-4">Our Courses</li>
                    <li className="text-[#2B2E30] text-[14px] mr-4">Free Knwoledge</li>
                    <li className="text-[#2B2E30] text-[14px] mr-4">Tracks</li>
                    <li className="text-[#2B2E30] text-[14px] mr-4">Articles</li>
                    <li className="text-[#2B2E30] text-[14px] mr-4">Trainers</li>
                </ul>
            </div>
           
            <div className="flex items-center">
                <input type="text" className="border border-[#DCDCDC] outline-none h-[36px] w-[325px] text-[12px] px-2 rounded-l"/>
                    <BsSearch className="inline-block relative right-6 w-[14px] h-[14px]" fill="#007394"/>

            </div>
            <div className="flex flex-row-reverse">
                <span className="bg-[#FFAE0D] flex items-center relative bottom-2 right-1 justify-center text-white rounded-xl w-[16px] h-[16px] text-[10px]">2</span>
                <BsCart3/>
            </div>
            
            <div>
                <button className="rounded-[18px] mr-[10px] w-[100px] h-[36px] bg-[#007394] text-white " >Login</button>
                <button className="rounded-[18px] w-[100px] h-[36px] border border-[#007394]">Register</button>
            </div>
            

        </div>
    )
}
export default Header