import React from 'react';
import { MapPinIcon, CurrencyDollarIcon  } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const StorageJob = ({storageJob}) => {
    console.log(storageJob);
    const {company_logo, company_name, id, fulltime_partTime, location, Onsite_remote, salary,job_title}=storageJob;
    return (
        <div className='border shadow-xl rounded-md  my-3 p-4 grid grid-cols-1 md:grid-cols-3 md:justify-items-center md:items-center'>
        <img src={company_logo} className='w-full h-64 me-2 block border'/>
        <div>
            <p className='text-3xl font-semibold ml-2'>{job_title}</p>
            <p className='text-3xl  ml-2'>{company_name}</p>
        <button className='btn1'>{Onsite_remote}</button>
        <button className='btn1'>{fulltime_partTime}</button><br/>
        <p className='inline-flex py-3 ml-1'><MapPinIcon className="h-6 w-6 text-blue-500"></MapPinIcon> {location} <CurrencyDollarIcon className="h-6 w-6 text-blue-500"></CurrencyDollarIcon> <span>Salary:{salary}</span></p>
        </div>
        <div className=''>
            <Link to={`/details/${id}`}>
        <button className='btn'>View Details</button>
        </Link>
        </div>
        
        
        
        
      
       
      
    </div>
    );
};

export default StorageJob;