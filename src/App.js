import React , {useEffect}from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import './App.css';

// const alanKey='b0e2a16edaa47db6fd4b71d5eee265232e956eca572e1d8b807a3e2338fdd0dc/stage';

const App=()=>{

  useEffect(()=>{
    alanBtn({
      key: alanKey,
      
    })
  },[])



  return(
    <div>
      <h1>Alan AI News</h1>
    </div>
  )
}
export default App;
