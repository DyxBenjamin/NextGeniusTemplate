import {Fragment} from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import UserRecipies from "@pages/app/components/UserRecipies";
import RecetasCard from "@pages/app/components/RecetasCard";

export default function NewsIndex() {
    return (
        <Fragment>
            <div style={{marginBottom: "15px", height: "80vh", overflow: "scroll"}}>
                <Card sx={{
                    minWidth: 275,
                    maxWidth: "90%",
                    margin: "auto",
                    marginTop: "20px",
                    backgroundColor: "#CDCDCD"
                }}>
                    <CardContent>
                        <p style={{textAlign: "center"}}>Menú del día</p>
                        <RecetasCard/>
                        <RecetasCard/>
                    </CardContent>
                </Card>
                <button style={{
                    color: "grey",
                    borderRadius: "10px",
                    width: "90%",
                    margin: "auto",
                    marginTop: "5px",
                    display: "flex",
                    justifyContent: "center",
                    border: "none"
                }}>
                    <p>+ Agregar platillo</p>
                </button>
                <p style={{textAlign: "center"}}>Integrantes del plan</p>
                <UserRecipies/>
                <UserRecipies/>
            </div>
        </Fragment>
    )
}
