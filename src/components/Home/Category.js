
import CategorySlider from "../Sliders/CategorySliders"
import {BsArrowRight} from 'react-icons/bs'

const Category = ({data}) =>{
    return(
        <div className='mx-16'>
        <div className="flex justify-between my-10 max-[512px]:flex-col ">
            <div className="flex flex-col">
                <h2 className='text-[green]'>Category</h2>
                <p>Browse all course categorise</p>
            </div>
            <button className="bg-[green] text-white p-4 w-[130px] rounded-xl flex items-center max-[512px]:my-4"> 
                Browse All <BsArrowRight className='ml-2' fill='white'/>
            </button>
        </div>
        <CategorySlider data={data}/>
    </div>
    )
}

export default Category