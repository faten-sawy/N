
import {FaLinkedinIn,FaYoutube,FaTwitter,FaFacebookF} from "react-icons/fa"

const SocialList = () =>{
    
    const links = Object.freeze({
        facebook:'https://www.facebook.com/faten.sawy.16',
        twitter:'https://www.facebook.com/faten.sawy.16',
        youtube:'https://www.facebook.com/faten.sawy.16',
        linkedin:'https://www.facebook.com/faten.sawy.16'
    })

    const handleRedirect = (link) =>{

        window.location.href = link

    }
    return (
        <ul className="list-none flex">
           <li className="cursor-pointer border border-[white] mr-2 h-[28px] w-[28px] flex justify-center items-center rounded-[11px]" onClick={()=>handleRedirect(links.facebook)}><FaFacebookF className="inline-block w-[13px] h-[13px]" fill="white"/></li>
           <li className="cursor-pointer border border-[white] mr-2 h-[28px] w-[28px] flex justify-center items-center rounded-[11px]" onClick={()=>handleRedirect(links.twitter)}><FaTwitter className="inline-block w-[13px] h-[13px]" fill="white"/></li>
           <li className="cursor-pointer border border-[white] mr-2 h-[28px] w-[28px] flex justify-center items-center rounded-[11px]" onClick={()=>handleRedirect(links.youtube)}><FaYoutube className="inline-block w-[13px] h-[13px]" fill="white"/></li>
           <li className="cursor-pointer border border-[white] mr-2 h-[28px] w-[28px] flex justify-center items-center rounded-[11px]" onClick={()=>handleRedirect(links.linkedin)}><FaLinkedinIn className="inline-block w-[13px] h-[13px]" fill="white"/></li>
        </ul>
        
    )
}
export default SocialList