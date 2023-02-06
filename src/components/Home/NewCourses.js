import {BsArrowRight} from 'react-icons/bs'
import NewCoursesSlider from '../Sliders/NewCoursesSlider'

const NewCourses = ({data}) =>{
   return(
    <div className='mx-16'>
        <div className="flex justify-between my-10 max-[512px]:flex-col ">
            <div className="flex flex-col">
                <h2 className='text-[green]'>New Courses</h2>
                <p>Browse all courses categorise</p>
            </div>
            <button className="bg-[green] text-white p-4 w-[130px] rounded-xl flex items-center max-[512px]:my-4"> 
                Browse All <BsArrowRight className='ml-2' fill='white'/>
            </button>
        </div>
        <NewCoursesSlider data={data}/>
    </div>
   ) 

}

export default NewCourses