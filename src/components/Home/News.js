
import NewsSlider from "../Sliders/NewsSlider"
import { URL } from "@/assets/utils/environment"
const News = ({news}) =>{
    console.log(news)
    return(
        <div>
            <p>HI</p>
            {/* <NewsSlider/> */}
        </div>
    )
}

export async function getStaticProps(){
    const res = await fetch(URL.NEWS)
    const result = res.json()

    return{ props:{news:result}}
}
export default News