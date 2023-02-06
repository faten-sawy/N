import Image from "next/image"
import Link from "next/link"
import InstructorPhoto from "../../assets/Images/instractor.jpg"

const InstractorCard = ({data}) =>{
    const {photo,name,jobTitle,id} = data
    return(
        <div className="flex justify-center items-center flex-col">
            <Link href={`/instructors/${id}`}>
                <Image src={InstructorPhoto} alt="instrcutor Img" className="h-[90px] w-[90px] mb-4 rounded-[50%]"/>
            </Link>
            <p className="font-bold">{name}</p>
            <p>{jobTitle}</p>
        </div>
    )
}
export default InstractorCard