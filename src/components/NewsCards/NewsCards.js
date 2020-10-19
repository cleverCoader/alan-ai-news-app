import React from 'react';
import {Grid, Grow} from '@material-ui/core';

import NewsCard from '../NewsCard/NewsCard';
import useStyles from './styles.js';

const NewsCards = ({ articles}) => {

    const classes= useStyles();

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                 {articles.map((article,i) =>(
                     <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}}>
                         <NewsCard article={articles} i={i} />
                     </Grid>
                ))}

            </Grid>   
        </Grow>
    )
}

export default NewsCards;
