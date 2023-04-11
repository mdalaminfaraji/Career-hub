import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getJobFromStorage } from '../fakeDb/fakeDb';
import StorageJob from '../StorageJob/StorageJob';

const AppliedJobs = () => {
    const applyJob=useLoaderData();
   
    const savedJob=getJobFromStorage();
    const apply=[];
    for(const id in savedJob){
        const FoundJob=applyJob.find(getJob=>getJob.id==id);
        if(FoundJob){
            const quantity=savedJob[id];
            FoundJob.quantity=quantity;
            apply.push(FoundJob);
        }
    }
    
   
    return (
        <div>
           <h1 className='text-center my-container bg-slate-50 font-bold text-4xl my-3 '>Applied Jobs</h1> 
           <div className='text-end py-6 pe-10'>
            <button className='btn me-3'>onSite</button>
            <button className='btn'>Remote</button>
           </div>
           <div className='mx-7'>

            {
                apply.map(storageJob=><StorageJob key={storageJob.id} storageJob={storageJob}></StorageJob>)
            }
           </div>


        </div>
    );
};

export default AppliedJobs;