import {Card, CardMedia, Fab, Typography} from '@mui/material';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import _ from "lodash"
import Router from "next/router";
const CarouselMenuCards = ({ recipeName, title, calories, image }) => {
    return (
        <Card style={{marginBottom:"10px"}}>
            <CardContent>
                <div style={{display: "flex"}}>
                        {title}
                        <img src={image} style={{maxHeight:"30px", maxWidth:"50px", marginRight:"20%", marginLeft:"20%", marginTop:"-1vh"}} alt="Imagen de ejemplo" />
                    <CardActions style={{ marginLeft: "auto", marginTop: "-5%" }}>
                        <Button size="small" style={{ backgroundColor: "#FFFFFF" }}
                                >Ver receta</Button>
                    </CardActions>
                </div>
                {calories && <p>{calories} kcal Totales</p>}
                <p>{recipeName}</p>
                {!calories && <Fab color="primary" aria-label="add" sx={{margin: "auto", marginLeft:"40%", marginRight:"40%"}}
                onClick={() => Router.push(`/app/crear`)}>
                    <AddIcon/>
                </Fab>}
            </CardContent>
        </Card>
    );
};

export default CarouselMenuCards;
