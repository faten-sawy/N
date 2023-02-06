import { useEffect, useState } from "react"
import CheckBox from "../CheckBox"

const Filter = () =>{
    const categoryList = [
        {
            name:"التصميم"
        },
        {
            name:"اللغات"
        },
        {
            name:"الشباكات والبرمجة"
        }
    ]
    const period = [
        {
            name:"ألكل"
        },
        {
            name:"دورة قصيرة(ساعة-ساعتين)"
        },
        {
            name:"دورة متوسطة(10-20)ساعة"
        }
    ]
    const languages = [
        {
            name:"العربية"
        },
        {
            name:"الانجليزية"
        },
        {
            name:"الأثنين معا"
        }
    ]
    const order = [
        {
            name:"الأحدث"
        },
        {
            name:"الأقدم"
        },
        {
            name:"الأعلي سعرا"
        },
        {
            name:"الأقل سعرا"
        },
        {
            name:"الأعلي مشاهدة"
        }
    ]

    const [filterItems,setFilterItems] = useState([])
    const [clearFlag,setClearFlag] = useState(false)
    const [unchecked,setUnchecked] = useState(false)

    const addFilterItem = (data) =>{
        setClearFlag(false)
        switch (data.action){
            case "remove": {
               setFilterItems(filterItems.filter((item)=>item.value !== data.value))
               break;

            }
            case "add": {
                setFilterItems([...filterItems,data])
                break;
            }

        }
    }

    const handleSubmit = (type) =>{
        switch(type){
            case "setFilter" : {
                // POST filterItems

                break;
            }
            case "clearFilter" : {
                setClearFlag(true)
                setFilterItems([])

            }
        }

    }

    const handleRemove = (data) =>{
        setUnchecked(data.value)
        setFilterItems(filterItems.filter((item)=>item.value !== data.value))
    }

    return(
        <div className="">
            <h2>التصفيات النشطة</h2>
            <div className="flex">
                {filterItems?.map((item)=>(
                    <button className="border mr-2 border-[blue] text-[blue] bg-blue-100 rounded-3xl  min-w-[130px] w-auto flex justify-between px-4 h-[30px] items-center">
                    <span className="mr-2" onClick={()=>handleRemove(item)}>X</span>
                    {item.value}
                    </button>
                ))}
                
            </div>
            <div className="flex flex-row-reverse">
            <div>
                {categoryList.map((item)=>(
                    <div key={item.name} className="flex justify-end">
                        <li className="list-none mr-2">{item.name}</li>
                        <CheckBox test={unchecked === item.name ?true:false}  clearFlag={clearFlag} addFilterItem={addFilterItem} value={item.name} /> 

                    </div>
                ))}

            </div>
            <div>
                {period.map((item)=>(
                    <div key={item.name} className="flex justify-end">
                        <li className="list-none mr-2">{item.name}</li>
                        <CheckBox test={unchecked === item.name ?true:false}  clearFlag={clearFlag} addFilterItem={addFilterItem} value={item.name}/>

                    </div>
                ))}
            </div>
            <div>
                {languages.map((item)=>(
                    <div key={item.name} className="flex justify-end">
                        <li className="list-none mr-2">{item.name}</li>
                        <CheckBox test={unchecked === item.name ?true:false}  clearFlag={clearFlag} addFilterItem={addFilterItem} value={item.name}/>
                    </div>
                ))}
            </div>
            <div>
                {order.map((item)=>(
                    <div key={item.name} className="flex justify-end">
                    <li className="list-none mr-2">{item.name}</li>
                    <CheckBox test={unchecked === item.name ?true:false}  clearFlag={clearFlag} addFilterItem={addFilterItem} value={item.name}/>
                </div>

                ))}
            </div>

            </div>
           
            <button className="border border-[gray]" onClick={()=>handleSubmit("setFilter")}>تطبيق التصفية</button>
            <button className="border border-[gray]" onClick={()=>handleSubmit("clearFilter")}>مسح التصفية</button>

        </div>
    )
}
export default Filter