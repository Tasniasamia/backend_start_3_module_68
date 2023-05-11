
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Carditem from './Component/Carditem';
// import { Outlet } from 'react-router-dom';

const App = () => {
  const loaddata=useLoaderData();
  console.log(loaddata);
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-6 my-8'>
{
  loaddata.map(index=><Carditem key={index._id} indexdata={index}>

  </Carditem>)
}
    
    </div>
  );
};

export default App;
