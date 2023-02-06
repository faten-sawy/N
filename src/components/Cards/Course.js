import Image from "next/image"
import Instractor from "../../assets/Images/instractor.jpg"
import {convertHoursFromDecimal} from "../../assets/utils/functions"

import {BsClock,BsStarFill,BsFillHeartFill,BsArrowRight} from 'react-icons/bs'
import {CgNotes} from "react-icons/cg"
import Link from "next/link"

const Course = ({data}) =>{
    const {photo,category,oldPrice,totalHouers,noOfVideos,price,name,isRated,rate,instructors,id,courseTypeId
    } = data
    
    const calcDiscount = (before,after) =>{
      const x =  1-(after/before) 
      const discount = x*100

        return discount
    }

    return (
        <div className=" text-bold rounded-xl border border-gray-400 ">
            
                {/* Top Part */}
            <div className="flex justify-between rounded-t-xl p-4 bg-orange-300">
                {/*Like*/}
                <div className="h-9 w-9 bg-white flex justify-center items-center rounded-[50%]">               
                <Link href={courseTypeId == 4 ? `/paths/${id}` : `/courses/${id}`}>
                    <BsFillHeartFill fill="red" width={30}/>
                    </Link>
                </div>
                {/* Inastructor Image */}
                <div className="flex mt-2">
                    <Image alt="instructor img" className="rounded-[50%]" width={120} height={120}  src={Instractor}/>
                </div>
                <div className="flex flex-col">
                    <p className="bg-[orange] text-white p-2 rounded-md mb-3 text-center ">{category?.name}</p>
                    {oldPrice !== price && <p className="bg-[red] text-white p-2 rounded-md  text-center">{calcDiscount(oldPrice,price)}% OFF</p>}
                </div>
            </div>
            {/* Middle Part */}
            <div className="my-4 p-4">
                <h2 className="font-bold capitalize my-4">{name}</h2>
                <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                        <BsClock fill="green"/>
                        <p className="ml-2">{convertHoursFromDecimal(totalHouers)}</p>
                    </div>
                    <div className="flex items-center"> 
                        <CgNotes fill="red" style={{color:"green"}}/>
                        <p className="ml-2">{noOfVideos} Lessons</p>
                    </div>
                   
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center">
                       <BsClock fill="green"/>
                       <p className="ml-2">{instructors && instructors[0]?.name}</p>
                    </div>
                    {isRated &&(
                        <div className="flex items-center"> 
                            <BsStarFill fill="yellow"/>
                            <p className="ml-2">{rate}Lessons</p>
                        </div>
                    )}
                                   
                </div>
                
            </div>
            {/* Third Part */}
            <div className="p-4  flex justify-between border-t border-t-slate-400">
                
                <p className="text-[green] font-bold">
                    {price} EGP
                    {oldPrice !== price  && (
                        <span className="text-[gray] line-through">
                        {oldPrice} EGP
                    </span>           
                    )} 
                    
                </p>
                <Link href={`/courses/${id}`}>
                    <p className="text-[green] font-bold flex items-center cursor-pointer"> Learn Now <BsArrowRight className="ml-2 mt-1"/></p> 
                </Link>   
            </div>    
        </div>
    )
}

export default Course