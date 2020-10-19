import React , {useState, useEffect}from 'react';
import { Typography } from '@material-ui/core';
import alanBtn from '@alan-ai/alan-sdk-web';
import './App.css';
import NewsCards from './components/NewsCards/NewsCards';

import useStyles from './style.js';

const alanKey='b0e2a16edaa47db6fd4b71d5eee265232e956eca572e1d8b807a3e2338fdd0dc/stage';

const App=()=>{

  const [newsArticles, setNewsArticles]= useState([]);


  const classes =useStyles();

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
        <div className={classes.logoContainer}>
        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
          </div>
        ) : null}
        <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="logo" />
      </div>
      <NewsCards  articles={newsArticles} />
    </div>
  )
}
export default App;
