import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data01 = [
    { name: 'MileStone-1-total-module', value: 6 },
    { name: 'MileStone-2-total-module', value: 5 },
    { name: 'MileStone-3-total-module', value: 5 },
    { name: 'MileStone-4-total-module', value: 8 },
    { name: 'MileStone-5-total-module', value: 6 },
    { name: 'MileStone-6-total-module', value: 8},
    { name: 'MileStone-7-total-module', value: 7 },
    { name: 'MileStone-8-total-module', value: 7 },
  ];
  const data02 = [
    { name: 'Assignment-1', value: 59 },
    { name: 'Assignment-2', value: 60 },
    { name: 'Assignment-3', value: 60 },
    { name: 'Assignment-4', value: 60 },
    { name: 'Assignment-5', value: 57 },
    { name: 'Assignment-6', value: 60 },
    { name: 'Assignment-7', value: 60 },
    { name: 'Assignment-8', value: 58 },

  ];

const Dashboard = () => {
    return (
        <ResponsiveContainer width="100%" aspect={3}>
    
        <PieChart width={400} height={400}>
            <Tooltip/>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
    );
};

export default Dashboard;