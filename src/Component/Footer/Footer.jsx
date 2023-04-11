import { faEnvelope, faPhone,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <>
        <div className='my-container  bg-black opacity-90 text-white mt-4 rounded-md'>
            <div className='pl-6 grid grid-cols-1 md:grid-cols-4 gap-3'>
            <div>
                <h1 className='font-bold text-2xl pb-3'>JobNexus</h1>
                <p>It is most populer site in the world . Thousands of search job in this site.</p>
                <p><FontAwesomeIcon icon={faEnvelope} /> alaminice1617@gmail.com</p>
                <p><FontAwesomeIcon icon={faPhone}/> 019734774636</p>
                
            </div>
            <div>
               <h1 className='font-bold text-2xl pb-3'>Company</h1> 
               <p>About us</p>
               <p>Work</p>
               <p>Largest News</p>
               <p>Careers</p>
            </div>
            <div>
                <h1 className='font-bold text-2xl pb-3'>Product</h1>
                <p>Prototype</p>
                <p>Plans & pricing</p>
                <p>Customers</p>
                <p>Integrations</p>
            </div>
            <div>
                <h1 className='font-bold text-2xl pb-3'>Support</h1>
                <p>Help Desk</p>
                <p>Sales</p>
                <p>Become a partner</p>
                <p>Developers</p>
            </div>
            </div>
            
             <hr className='mt-5'/>
             <h1 className='text-center pt-5'>@JobNexus populer website</h1>
        </div>
        
       
        </>
        
    );
};

export default Footer;