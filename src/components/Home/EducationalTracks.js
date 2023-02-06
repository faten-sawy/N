import NewCoursesSlider from "../Sliders/NewCoursesSlider"
import {BsArrowRight} from 'react-icons/bs'


const EducationalTracks = ({data}) =>{
    return(
        <div className='mx-16'>
            <div className="flex justify-between my-10 max-[512px]:flex-col ">
                <div className="flex flex-col">
                    <h2 className='text-[green]'>Educational Tracks</h2>
                    <p>Paths From Beginning To Professionalism</p>
                </div>
                <button className="bg-[green] text-white p-4 w-[130px] rounded-xl flex items-center max-[512px]:my-4"> 
                    Browse All <BsArrowRight className='ml-2' fill='white'/>
                </button>
            </div>
            <NewCoursesSlider data={data}/>
        </div>

    )

}
export default EducationalTracks