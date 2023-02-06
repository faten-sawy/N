import {BsArrowRight} from 'react-icons/bs'

const StaticSlider =()=>{
    return (
        <div className="bg-blue-400  h-min-[200px] h-auto flex flex-col items-center p-4">
            <h2 className="text-white font-bold text-[3em] my-5">A Leraning Experrince Arround The World</h2>
            <p className="text-white my-5 w-[50%] text-center"> 
                A Leraning Experrince Arround The WorldA Leraning Experrince Arround The WorldA Leraning Experrince Arround The WorldA Leraning Experrince Arround The WorldA Leraning Experrince Arround The WorldA Leraning Experrince Arround The WorldA Leraning Experrince Arround The WorldA Leraning Experrince Arround The World
            </p>
            <div className='flex my-4 flex-wrap'>
                <button className="h-[40px] mb-4 mx-4 border border-white px-2 rounded-lg text-white flex items-center justify-center">
                    Reister as student <BsArrowRight className='ml-2'/>
                </button>
                <button className="h-[40px] mb-4 mx-4 px-2 rounded-lg text-white bg-orange-400 flex items-center justify-center">
                    Register as trainer <BsArrowRight className='ml-2'/>
                </button>
            </div>
        </div>
       

    )
}

export default StaticSlider