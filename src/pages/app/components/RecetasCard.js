import React from "react"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function RecetasCard() {
    return (
                <Card style={{marginBottom:"10px"}}>
                    <CardContent>
                        <div style={{display: "flex"}}>
                            <div>
                                Platillo
                            </div>
                            <CardActions style={{ marginLeft: "auto", marginTop: "-5%" }}>
                                <Button size="small" style={{ backgroundColor: "#FFFFFF" }}>Ver receta</Button>
                            </CardActions>
                        </div>
                        <p>Porciones</p>
                        <p>Obervaciones de los alimentos</p>
                    </CardContent>
                </Card>
    )
}
