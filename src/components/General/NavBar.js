import { useState } from "react"
import {BsMoon,BsSun} from "react-icons/bs"
import SocialList from "./SocialList"

const NavBar = () =>{
    const [moodFlag,setMoodFlag] = useState(true)
    const [mood,setMood] = useState("")

    const handleMood = (e) =>{
        setMood(e.target.value)
        setMoodFlag(!moodFlag)
    }
    const handleLanguage = (e) =>{
        console.log(e.target.value)
    }

    return(
        <nav className="bg-[#025B8E] h-[68px] px-8 flex justify-between items-center">
            <div className="flex items-center">
                <div className="mr-8">
                    <select onChange={handleMood} className="bg-transparent outline-none text-[15px] cursor-pointer text-[white] leading-4 font-normal" name="cars" id="cars">
                        <option className="bg-white text-black text-[15px] leading-4 font-normal"  value="light">English</option>
                        <option className="bg-white text-black text-[15px] leading-4 font-normal" value="dark">Arabic</option>  
                    </select>
                </div>
                <div>
                    {moodFlag ? <BsSun className="w-[37px] h-[20px]  inline-block" fill="white"/>:<BsMoon className="w-[23px]  inline-block" fill="white"/>}
                    <select onChange={handleLanguage} className="bg-transparent outline-none text-[15px] cursor-pointer text-[white] leading-4 font-normal" name="cars" id="cars">
                        <option className="bg-white text-black text-[15px] leading-4 font-normal"  value="light">Light Mode</option>
                        <option className="bg-white text-black text-[15px] leading-4 font-normal" value="dark">Dark Mode</option>  
                    </select>
                </div>      
            </div>

            <div className="flex items-center ">              
                <div className="flex mr-8">
                    <p className="text-white cursor-pointer mr-8 ">Common Questions</p>
                    <p className="text-white cursor-pointer">Call Us</p>
                </div>              
                <SocialList/>

            </div>            
        </nav>
    )
}
export default NavBar