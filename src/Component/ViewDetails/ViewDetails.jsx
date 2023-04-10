import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon, BriefcaseIcon,PhoneIcon,EnvelopeIcon, PhoneXMarkIcon  } from '@heroicons/react/24/solid'

const ViewDetails = () => {
    const jobDetails=useLoaderData();
    const {id}=useParams();
    const data=jobDetails.find(item=>item.id==id);
    const {job_description, job_responsibility,job_title, location, phone, salary, experiences,email, educational_requirements }=data;
    return (
        <>
        <h1 className='text-center my-container bg-slate-50 mt-4 text-4xl font-bold'>Job Details</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-4 my-container'>
            <div className='col-start-1 col-end-3 lg:col-start-1 lg:col-end-4'>
             <p><span className='font-bold'>Job Description:</span>  {job_description}</p>
             <p><span className='font-bold'>Job Responsibility:</span>{job_responsibility}</p>
             <p className='font-bold'>Educational Requirement:</p> 
             <p>{educational_requirements}</p>
             <p className='font-bold'>Experience:</p>
             <p>{experiences}</p>  
                
            </div>
            <div className='px-4 mt-3 rounded-lg bg-sky-100'>
                <p className='font-bold py-4 text-xl'>Job Details</p>
                <hr className='text-slate-700 pb-3'/>
                <p className='inline-flex py-3'><CurrencyDollarIcon className="h-6 w-6 text-black-500"></CurrencyDollarIcon> <span className='font-semibold'>Salary</span>:{salary}</p>
                <p className='inline-flex'><BriefcaseIcon className="h-6 w-6 text-black-500"></BriefcaseIcon> <span className='font-semibold'>Job Title</span>: {job_title}</p>
                <p className='font-bold'>Contact Information</p>
                <p className='inline-flex'><PhoneIcon className='className="h-6 w-6 text-blue-500"'></PhoneIcon> Phone:{phone}</p><br></br>

                <p className='inline-flex'><EnvelopeIcon className='className="h-6 w-6 text-black-500"'></EnvelopeIcon> Email:{email}</p><br/>
                <p className='inline-flex'><MapPinIcon className="h-6 w-6 text-black-500"></MapPinIcon>  Address: {location}</p><br/>

                <button className='bg-blue-500 py-4 rounded-2xl text-white text-xl font-bold hover:bg-blue-700 w-full my-4'>Apply Now</button>

            </div>
        </div>
        </>
        
    );
};

export default ViewDetails;