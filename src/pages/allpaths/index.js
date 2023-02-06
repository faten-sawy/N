
import Filter from "@/components/AllPaths/filter"
import { useEffect } from "react"
import axios from "axios"
import { URL } from "@/assets/utils/environment"
const AllPathes = () =>{
    useEffect(()=>{
        axios.get(URL.HOME_COURSES).then(res=>console.log(res))
        console.log("HELLO")

    },[])
    return(
        <div>
            <Filter/>

        </div>
        
    )
}
export default AllPathes