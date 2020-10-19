import React from 'react';
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core';

const NewsCard = ({article :{description, publishedAt, source, title, url, urlToImage,} , i}) => {


    return (
        <div>
            {/* <Card>
                <CardActionArea>
                    <CardMedia image={urlToImage} />
                    <div>
                        <Typography  variant="body2" color="textSecondary" component="h2"> {(new Date(publishedAt)).toDateString()} </Typography>
                        <Typography  variant="body2" color="textSecondary" component="h2"> {source?.name} </Typography>
                    </div>
                    <Typography gutterBottom variant="h5"> {title} </Typography>
                    <CardContent>
                        <Typography  variant="body2" color="textSecondary" component="p"> {description} </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary"> Learn More </Button>
                    <Typography variant="h5" color="textSecondary"> {i+1} </Typography>
                </CardActions>
            </Card> */}
            <Card>
                <CardActionArea>
                    <CardMedia image={urlToImage} />
                    <div>
                        <Typography  variant="body2" color="textSecondary" component="h2"> {"19th oct 2020"} </Typography>
                        <Typography  variant="body2" color="textSecondary" component="h2"> BBC </Typography>
                    </div>
                    <Typography gutterBottom variant="h5"> {"Ab Devilliars Hits High against RR in IPL 2020"} </Typography>
                    <CardContent>
                        <Typography  variant="body2" color="textSecondary" component="p"> {"when RR played against RCB in ipl 2020 Thae amtch was so interesting that When AB came into crase The target was very far but he made It loos cool"} </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary"> Learn More </Button>
                    <Typography variant="h5" color="textSecondary"> {i+1} </Typography>
                </CardActions>
            </Card>

        </div>
    )
}

export default NewsCard;
