import React from 'react';
import { MapPinIcon, CurrencyDollarIcon  } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const FeaturedJob = ({FeatureJob}) => {
    const {company_logo, company_name, id, fulltime_partTime, location, Onsite_remote, salary}=FeatureJob;
 
    
    return (
        <div className='border shadow-xl rounded-md w-96 my-3 p-4'>
            <img src={company_logo} className='w-40 h-32 '/>
            <p className='text-3xl font-semibold ml-2'>{company_name}</p>
            <button className='btn1'>{Onsite_remote}</button>
            <button className='btn1'>{fulltime_partTime}</button>
            <p className='inline-flex py-3 ml-1'><MapPinIcon className="h-6 w-6 text-blue-500"></MapPinIcon> {location} <CurrencyDollarIcon className="h-6 w-6 text-blue-500"></CurrencyDollarIcon> <span>Salary:{salary}</span></p>
            <Link to={`/details/${id}`}>
            <button className='btn2'>View Details</button>
            
            </Link>
          
           
          
        </div>
    );
};

export default FeaturedJob;