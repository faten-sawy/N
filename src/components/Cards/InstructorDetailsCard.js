import Image from "next/image"
import {BsPerson,BsTv,BsEye,BsShare} from "react-icons/bs"
import {FaLinkedinIn,FaYoutube,FaTwitter,FaFacebookF} from "react-icons/fa"

export default function InstructorDetailsCard  ({instructor,courses}){
    const {photo,name,jopTitle,viewers,numberOfStudent,about,numberOfCourses} = instructor
    console.log(instructor)
    return (
        <div className="flex flex-col items-end">
            <div className="flex flex-row-reverse w-full text-right bg-green-700 p-8 max-[770px]:flex-col">
{/*                 <Image src={photo} className="rounded-[50%]  h-[250px] w-[250px] max-[770px]:rounded-none max-[770px]:w-[300px] relative max-[770px]:left[calc(50% - 150px)]"/>
 */}                <div className="mr-12 max-[770px]:m-0 ">
                    <h2 className="text-[2.5em]  max-[770px]:text-[2em] my-2">{name}</h2>
                    <h3 className="text-[1.5em] max-[70px]:text-[1em]">{jopTitle}</h3>
                    <div className="flex flex-row-reverse my-4 max-[770px]:flex-col">
                        <p className="flex flex-row-reverse justify-center items-center mx-4" ><BsTv  className="ml-2"/>{numberOfCourses}<span>دوة تديبية</span></p>
                        <p className="flex flex-row-reverse justify-center items-center mx-4"><BsEye className="ml-2"/>{viewers}<span>مشاهدة</span></p>
                        <p className="flex flex-row-reverse justify-center items-center mx-4"><BsPerson className="ml-2"/>{numberOfStudent}<span>متدب</span></p>

                    </div>
                    <div className="flex flex-row-reverse items-center ">
                        <BsShare className="ml-4"/>
                        <p>مشاكة المدب</p>
                        <div className="flex mr-4  ">
                            <li className="border mr-2 rounded-[50%] list-none w-6 h-6 flex justify-center items-center">
                                <FaFacebookF className="w-3 h-3"/>
                            </li>
                            <li className="border mr-2 rounded-[50%] list-none w-6 h-6 flex justify-center items-center">
                                <FaLinkedinIn className="w-3 h-3"/>
                            </li>
                            <li className="border mr-2 rounded-[50%] list-none w-6 h-6 flex justify-center items-center">
                                <FaTwitter className="w-3 h-3"/>
                            </li>
                            <li className="border mr-2 rounded-[50%] list-none w-6 h-6 flex justify-center items-center">
                                <FaYoutube className="w-3 h-3"/>
                            </li>
                        </div>
                    </div>
                </div>
                

            </div>

            <div className="text-right p-8 max-[770px]:p-6 w-[60%] max-[770px]:w-[90%]">
                <h2 className="font-bold text-[1.5em] mb-4">عن المدب</h2>
                <p>{about}</p>
            </div>
            <div>
                <h2 className="font-bold text-[1.5em]  p-8">الدوات التديبية</h2>
            </div>
            
        </div>
    )

}
