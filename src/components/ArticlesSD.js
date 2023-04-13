import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import _ from "lodash";
import {Fragment} from "react";

export default function ArticlesSD({articles}) {

    const mapAllArt = () => {
        const allArts = []
        _.each(articles, (valueArt, index) => {
            const articlesInd = (
                <Card sx={{maxWidth: 345, mb: 2}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={valueArt.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {valueArt.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>{valueArt.description.slice(0, 150)}...</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Leer Mas..</Button>
                    </CardActions>
                </Card>
            )
            allArts.push(articlesInd)
        })
        return allArts
    }
    return (
        <Fragment>
            {mapAllArt()}
        </Fragment>
    );
}
