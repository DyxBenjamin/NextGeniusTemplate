import {Fragment} from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import UserRecipies from "@pages/app/components/UserRecipies";
import RecetasCard from "@pages/app/components/RecetasCard";
import {Box, Typography} from "@mui/material";
import * as r_ from "radash";
import RecommendsByIUsers from "@components/RecommendsByUsers";
import CircularProgressComponent from "@components/circularProgressComponent";
import CarouselMenu from "@components/CarouselMenu";
import useGetAPI from "@hooks/useGetAPI";

export default function NewsIndex() {
    const {data: usersInfo, isLoading: usersIsLoading} = useGetAPI('/api/services/users');
    const {data: menuInfo, isLoading: cardIsLoading} = useGetAPI('/api/services/consumoDiario');
    if (usersIsLoading || cardIsLoading) {
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
                    backgroundColor: "#868589"
                }}>
                    <CardContent>
                        <Box sx={{mb: 1, display: 'flex', textAlign: 'center'}}>
                            <Typography sx={{flex: 1}} variant="subtitle1">
                                Comidas del día
                            </Typography>
                        </Box>
                        <div style={{display: "flex"}}>
                            <CarouselMenu cards={menuInfo}></CarouselMenu>
                        </div>
                    </CardContent>
                </Card>
                {/*<button style={{*/}
                {/*    color: "grey",*/}
                {/*    borderRadius: "10px",*/}
                {/*    width: "90%",*/}
                {/*    margin: "auto",*/}
                {/*    marginTop: "5px",*/}
                {/*    display: "flex",*/}
                {/*    justifyContent: "center",*/}
                {/*    border: "none"*/}
                {/*}}>*/}
                {/*    <p>+ Agregar platillo</p>*/}
                {/*</button>*/}
                {/*<p style={{textAlign: "center"}}>Integrantes del plan</p>*/}
                {/*<UserRecipies/>*/}
                {/*<UserRecipies/>*/}
                <Box sx={{mb: 1, mt: 2, display: 'flex', textAlign: 'center'}}>
                    <Typography sx={{flex: 1}} variant="subtitle1">
                        Recomendaciones por Usuario
                    </Typography>
                </Box>
                <RecommendsByIUsers users={usersInfo}/>
            </div>
        </Fragment>
    )
}
