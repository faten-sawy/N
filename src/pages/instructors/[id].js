
import InstructorDetailsCard from "@/components/Cards/InstructorDetailsCard"
import Course from "@/components/Cards/Course"

export default function InstructorDetails ({instructor}){
   
    return(
        <div className="">
            <InstructorDetailsCard instructor={instructor}/>
            {instructor.courses.map((course)=>(
                <div key={course.id}>
                    <Course data ={course}/>
                </div>
                
            ))}
        </div>               
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://test2.plan-b-eg.com/api/Info/GetInstructorDetails?instructorId=${context.params.id}&lang=en`)
    const data = await res.json()

    return{
        props:{instructor:data}
    }
}