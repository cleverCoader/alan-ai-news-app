import React , {useState, useEffect}from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import './App.css';
import NewsCards from './components/NewsCards/NewsCards';


const alanKey='b0e2a16edaa47db6fd4b71d5eee265232e956eca572e1d8b807a3e2338fdd0dc/stage';

const App=()=>{

  const [newsArticles, setNewsArticles]= useState([]);

  useEffect(()=>{
    alanBtn({
      key: alanKey,
      onCommand : ({command,  articles })=>{
        if(command === 'newHeadlines'){
          setNewsArticles(articles);
        }
      }
    })
  },[])



  return(
    <div>
      <h1>Alan AI News</h1>
      <NewsCards  articles={newsArticles} />
    </div>
  )
}
export default App;
