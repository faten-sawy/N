import Head from 'next/head'

import { URL } from '@/assets/utils/environment'

import NewCourses
 from '@/components/Home/NewCourses'
import OnlineCourses from '@/components/Home/OnlineCourses'
import EducationalTracks from '@/components/Home/EducationalTracks'
import Trainers from '@/components/Home/Trainers'
import Category from '@/components/Home/Category'
import FeatureCard from '@/components/Cards/Features'
import StaticSlider from '@/components/Home/StaticSlider'
import { filterCourses } from '@/assets/utils/functions'
import News from '@/components/Home/News'

export default function Home({courses,categoryData,instractors}) {
  const dummyData = [{
    text:"International Certification",
    desc:"International CertificationInternational CertificationInternational CertificationInternational CertificationInternational CertificationInternational CertificationInternational CertificationInternational Certification",
    name:"certificate"
  },
  {
    text:"International Certification",
    desc:"International CertificationInternational CertificationInternational CertificationInternational CertificationInternational CertificationInternational CertificationInternational CertificationInternational Certification",
    name:"certificate"

  },
  {
    text:"International Certification",
    desc:"International CertificationInternational CertificationInternational CertificationInternational CertificationInternational CertificationInternational CertificationInternational CertificationInternational Certification",
    name:"certificate"
  },
  {
    text:"International Certification",
    desc:"International CertificationInternational CertificationInternational CertificationInternational CertificationInternational CertificationInternational CertificationInternational CertificationInternational Certification",
    name:"certificate"
  }]
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <News/>
      {/* <div className='bg-emerald-100 h-[500px] w-full flex justify-center  '>
        {dummyData.map((item,index)=>(
          <div key={index}>
            <FeatureCard data={item}/>
          </div>
          
        ))}
      </div>
      <StaticSlider />
      
      <NewCourses data={courses.offlineCourses}/>
      <OnlineCourses data={courses.onlineCourses}/>
      <EducationalTracks data={courses.paths}/>
      <Trainers data={instractors}/>
      <Category data={categoryData}/>   */}   
    </>
  )
}
/* export async function getStaticProps() {
  const res = await fetch(URL.HOME_COURSES)
  const data = await res.json()

  const courses = filterCourses(data)


  const categoryRes = await fetch(URL.CATEGORIES)
  const categoryData = await categoryRes.json()

  const instractorsRes = await fetch(URL.INSTRUCTORS)
  const instractors = await instractorsRes.json()


  return { props: { courses,categoryData,instractors } }
}
 */


