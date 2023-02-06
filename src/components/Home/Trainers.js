import {BsArrowRight} from 'react-icons/bs'
import InstructorSlider from '../Sliders/InstructorsSlider'

const Trainers = ({data}) =>{
   
    return (
        <div className="mx-16">
            <div className="flex justify-between my-10 max-[512px]:flex-col ">
            <div className="flex flex-col">
                <h2 className='text-[green]'>Plan B Trainers</h2>
                <p>Our Trainers Are Specialist And Qualified To Proide The Knowledge And The Knowledge Gained</p>
            </div>
            <button className="bg-[green] min-[512px]:ml-4 min-[512px]:w-[300px] h-[60px] text-white p-4 w-[130px] rounded-xl flex items-center justify-center max-[512px]:my-4"> 
                Browse All <BsArrowRight className='ml-2' fill='white'/>
            </button>
            </div>
            <InstructorSlider data={data}/>
        </div>

    )
}
export default Trainers