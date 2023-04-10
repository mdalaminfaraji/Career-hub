import React, { useState } from 'react'


import Banner from '../Banner/Banner'
import JobCategory from '../JobCategory/JobCategory'
import { useLoaderData } from 'react-router-dom'
import FeaturedJob from '../FeaturedJob/FeaturedJob'

const Home = () => {
    const [state, setState]=useState(true);
    const FeatureJobs=useLoaderData();
   
  return (
    <>
     <Banner></Banner>
     <JobCategory></JobCategory>
     <h1 className='text-4xl font-bold text-center'>Featured Jobs</h1>
     <p className='text-center pt-3'><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
     <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center my-container'>
        {state?(FeatureJobs.slice(0, 4).map(FeatureJob=>(<FeaturedJob FeatureJob={FeatureJob} key={FeatureJob.id}></FeaturedJob>))):(FeatureJobs.map(FeatureJob=>(<FeaturedJob FeatureJob={FeatureJob} key={FeatureJob.id}></FeaturedJob>))) 
        }
        
        

     </div>
     {
        state?(<button className='btn2' onClick={()=>setState(!state)}>ShowMore</button>):(<button className='btn2' onClick={()=>setState(!state)}>ShowLess</button>)
     }
     
    </>
   
  )
}

export default Home
