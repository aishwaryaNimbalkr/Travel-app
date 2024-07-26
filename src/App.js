import data from './data'
import './App.css';
import { useState } from 'react';
import Travels from './Components/Travels';

function App() {
  const [state,setState]=useState(data);
  function Remove(id){
    const deleted= state.filter((it)=>it.id !== id)
    setState(deleted)

  }

  return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    <>
    {state.length === 0? <div className=' border border-2 border-dark bg-info text-center py-5'><p>No service is available</p> <p style={{cursor:"pointer"}} onClick={()=>{setState(data)}}>Refresh</p></div>: <Travels tours={state} Remove={Remove}/>}
   
    
    </>
  );
}

export default App;
