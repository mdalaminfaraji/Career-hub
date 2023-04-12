import React from 'react';
import Dashboard from '../Dashboard/Dashboard';

const Statistics = () => {
   
    return (
        <div>
            <h1 className='text-center mt-4 my-container font-bold text-4xl'>PieChart Based on Assignment Marks!!!!</h1>

            <div>
              <Dashboard></Dashboard>
            </div>
            <h1 className='text-center mt-4 my-container font-bold text-3xl'> PieChart: Assignment Marks & Milestone Module!!!!</h1>
        </div>
    );
};

export default Statistics;