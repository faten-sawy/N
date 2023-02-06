import Image from "next/image"

import {TbCertificate} from "react-icons/tb"
const FeatureCard = ({data}) =>{
    const {desc,text} = data

    return(
        <div className="py-5 flex flex-col justify-center items-center relative top-9 mx-4 bg-white rounded-xl">
            <TbCertificate className="w-16 h-16"/>
            <h2 className="my-4 font-bold">{text}</h2>
            <p className="text-center p-2">{desc}</p>
        </div>      
    )
}
export default FeatureCard