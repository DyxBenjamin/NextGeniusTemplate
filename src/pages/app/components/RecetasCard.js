import React from "react"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


export default function RecetasCard({time}) {
    return (
                <Card style={{marginBottom:"10px"}}>
                    <CardContent>
                        <div style={{display: "flex"}}>
                            <div>
                                {time}
                            </div>
                            <CardActions style={{ marginLeft: "auto", marginTop: "-5%" }}>
                                <Button size="small" style={{ backgroundColor: "#FFFFFF" }}>Ver receta</Button>
                            </CardActions>
                        </div>
                        <p>Porciones</p>
                        <p>Obervaciones de los alimentos</p>
                        <Fab color="primary" aria-label="add" sx={{ margin: "auto" }}>
                            <AddIcon />
                        </Fab>
                    </CardContent>
                </Card>
    )
}
