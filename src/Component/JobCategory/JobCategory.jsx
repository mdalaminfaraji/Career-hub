import React, { useEffect, useState } from 'react';

const JobCategory = () => {
    const [jobs, setJob]=useState([])
    useEffect(()=>{
        fetch("jobCategory.json")
        .then(res=>res.json())
        .then(data=>setJob(data));
    },[])
    
    return (
        <div className='my-container'>
           <h1 className='text-4xl font-bold text-center'>Job Category List</h1> 
           <p className='text-center py-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-4'>
            {
                jobs.map(job=>(
                    <div className='border p-5 bg-blue-100 rounded-xl hover:bg-cyan-300 shadow text-center'>
                        <img className='h-10 w-16 mx-auto rounded-full' src={job.image_link}/>
                        <h3 className='text-xl pt-3 text-bold'>{job.job_title}</h3>
                        <p className='font-thin'>{job.vacancy}</p>
                    </div>
                ))
            }
           </div>

            
        </div>
    );
};

export default JobCategory;