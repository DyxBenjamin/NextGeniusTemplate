import {Card, CardMedia, Fab, Typography} from '@mui/material';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import _ from "lodash"
const CarouselMenuCards = ({ recipeName, title, calories }) => {
    return (
        <Card style={{marginBottom:"10px"}}>
            <CardContent>
                <div style={{display: "flex"}}>
                    <div>
                        {title}
                    </div>
                    <CardActions style={{ marginLeft: "auto", marginTop: "-5%" }}>
                        <Button size="small" style={{ backgroundColor: "#FFFFFF" }}>Ver receta</Button>
                    </CardActions>
                </div>
                <p>{calories}</p>
                <p>{recipeName}</p>
                {!calories && <Fab color="primary" aria-label="add" sx={{margin: "auto", marginLeft:"40%", marginRight:"40%"}}>
                    <AddIcon/>
                </Fab>}
            </CardContent>
        </Card>
    );
};

export default CarouselMenuCards;
