

const CategoryCard = ({data}) =>{
    const {name,numberOfCourses,photo} = data
    return(
        <div className="bg-[blue] rounded-xl h-[100px] flex flex-col items-center justify-center text-white">
            <p>{name}</p>
            <p>{numberOfCourses}</p>
        </div>
    )
}

export default CategoryCard