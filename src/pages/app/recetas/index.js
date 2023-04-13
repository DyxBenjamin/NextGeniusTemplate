import {Fragment} from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import UserRecipies from "@pages/app/components/UserRecipies";
import RecetasCard from "@pages/app/components/RecetasCard";
import CarouselMenu from "@components/CarouselMenu";
import useGetAPI from "@hooks/useGetAPI";
import CircularProgressComponent from "@components/circularProgressComponent";

export default function NewsIndex() {
    const {data: menuInfo, isLoading: cardIsLoading} = useGetAPI('/api/services/consumoDiario');
    if (cardIsLoading) {
        return (
            <CircularProgressComponent/>
        )
    }
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
                        <p style={{textAlign: "center"}}>Comidas del día</p>
                        <div style={{display: "flex"}}>
                        <CarouselMenu cards={menuInfo}></CarouselMenu>
                        </div>
                    </CardContent>
                </Card>
                <p style={{textAlign: "center"}}>Integrantes del plan</p>
                <UserRecipies/>
                <UserRecipies/>
            </div>
        </Fragment>
    )
}
