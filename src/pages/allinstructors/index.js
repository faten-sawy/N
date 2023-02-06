import axios from "axios"
import { useEffect, useState } from "react"
import {BsArrowLeft} from "react-icons/bs"
import instructor from "../../assets/Images/instractor.jpg"
import { useInstructor } from "@/assets/utils/Hooks/useInstructos"
const AllInstractors = () =>{

    const[limit,setLimit] = useState(12)
    const {data} = useInstructor(limit)
    
    const [showingData,setShowingData] = useState()

    useEffect(()=>{
        console.log("HI")
        if(data){
            if(limit >12){
                let arr = [...data]
                let length = data.length
                arr.length = length-6
                setShowingData(arr)                
            }
            else{
                setShowingData(data)
            }     

        }
    },[data])
    
    const handleLimit = () =>{
        if(data){
            if(showingData.length === data.length){
                setLimit(limit+12)
            }
            else {
                setShowingData(data)         
            }

        } 
    }

    return(
        <div>
             <div className="text-white h-[300px] w-full bg-[url('https://static.aviva.io/content/dam/aviva-public/gb/images/personal/illustrations/contact-pages/hero-illustration-contact-us-primary-teal-bg_2880x1620px.$common_hero_desktop$.png?$common_hero_desktop$')]">
                <p className="text-right relative right-24 top-32 font-bold text-[30px]">المدبين</p>
            </div>
            <div className="flex flex-row-reverse justify-between mt-8 px-8">
                <div className="text-right">
                    <p>مدبين بلان ب</p>
                    <p>مدبينا متخصصون ومؤهلون لتقديم العلم والمعفة المكتسب</p>
                </div>
                <button onClick={handleLimit} className="flex items-center justify-center bg-[orange] rounded-xl w-[190px] text-white p-4"><BsArrowLeft className="mr-2"/>سجل الآن</button>
               
            </div>
           
            {showingData?.map((item,_,arr)=>{
                console.log(showingData.length)
            })}

        </div>

        

    )
}

export default AllInstractors