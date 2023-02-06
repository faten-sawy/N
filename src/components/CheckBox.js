import { useEffect, useState } from "react"


const CheckBox = ({addFilterItem,value,clearFlag,test}) =>{
    const [isChecked,setIsChecked] = useState(false)
    console.log(test)

    useEffect(()=>{
        if(clearFlag){
            setIsChecked(false)
        }

    },[clearFlag])

    useEffect(()=>{
        if(test === true){
            setIsChecked(false)
        }
    },[test])

    const handleChecked = (e) =>{
        passValues(e.target.value)
        setIsChecked(!isChecked)
    }
    const passValues = (value) =>{
        isChecked ? addFilterItem({value:value,action:"remove"}) : addFilterItem({value:value,action:"add"})  
    }


    return(
        <input type="checkbox" onChange={(e)=>handleChecked(e)} value={value} checked={isChecked} />
    )
}
export default CheckBox