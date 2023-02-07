import { URL } from "public/assets/utils/environment"
import styles from "../../styles/Home.module.css"
import sliderDefault from "../../../public/assets/Images/Slider.jpg"
import t from "../../../public/assets/Images/instractor.jpg"

import Image from "next/image"

const NewsCard = ({data}) =>{
/*  data ?`url(${URL.IMAGE_PATH + data.photourl})`:  */
console.log(data)
console.log(sliderDefault,typeof(sliderDefault))
console.log(t)
    const bgStyle = {
        background :( data ?`url(${URL.IMAGE_PATH + data.photourl})`: `url(${URL.IMAGE_PATH +'/posternews/Slider.jpg' })`) ,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
    }
    return(
        <div className={`h-[100vh] px-8  ${styles.test} news-slider bg-no-repeat relative`} /* style={{backgroundImage:`url(${sliderDefault})`}} */ style={bgStyle} >
            <h1 className="text-[52px]  font-bold">Build Skills With Experts
            Anytime Anywhere</h1>
            {/* <Image src={sliderDefault}/> */}
        </div>
        
    )
}

export default NewsCard