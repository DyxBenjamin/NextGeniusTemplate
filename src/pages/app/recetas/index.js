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
import Button from "@mui/material/Button";

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
                    backgroundColor: "#e8e8e8"
                }}>
                    <CardContent>
                        <Box sx={{mb: 1, display: 'flex', textAlign: 'center'}}>
                            <Typography sx={{flex: 1}} variant="subtitle1">
                                Comidas del día
                            </Typography>
                        </Box>
                        <Box style={{display: "flex", flexDirection:'column', gap:'1rem', width:'100%'}}>
                            <Box sx={{width:'100%', background:'white', padding:'1rem', borderRadius:'8px', boxSizing:'border-box'}} >
                                <Box sx={{display: 'flex', justifyContent:'space-between', width:'100%', alignItems:'center'}} >
                                    <Typography sx={{ fontWeight:'bold' }} >
                                        Desayuno
                                    </Typography>
                                    <Typography variant={'subtitle2'} >
                                        Ver más
                                    </Typography>
                                </Box>
                                <Box sx={{ display:'flex', width:'100%', justifyContent:'space-between' }} >
                                    <Box sx={{ display:'flex', flexDirection:'column' }} >
                                        <Typography variant={'caption'} >
                                            Avena
                                        </Typography>
                                        <Typography variant={'caption'} >
                                            Cafe
                                        </Typography>
                                        <Typography variant={'caption'} >
                                            Fruta picada
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight:500, fontSize:'12px' }} >
                                            500 kcal
                                        </Typography>
                                        <Typography sx={{ fontWeight:500, fontSize:'12px' }} >
                                            20g de proteína
                                        </Typography>
                                        <Typography sx={{ fontWeight:500, fontSize:'12px' }} >
                                            20g de carbohidratos
                                        </Typography>
                                        <Typography sx={{ fontWeight:500, fontSize:'12px' }} >
                                            20g de grasas
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{width:'100%', background:'white', padding:'1rem', borderRadius:'8px', boxSizing:'border-box'}} >
                                <Box sx={{display: 'flex', justifyContent:'space-between', width:'100%', alignItems:'center'}} >
                                    <Typography sx={{ fontWeight:'bold' }} >
                                        Comida
                                    </Typography>
                                    <Typography variant={'subtitle2'} >
                                        Ver más
                                    </Typography>
                                </Box>
                                <Box sx={{ display:'flex', width:'100%', justifyContent:'space-between' }} >
                                    <Box sx={{ display:'flex', flexDirection:'column' }} >
                                        <Typography variant={'caption'} >
                                            Sopa de lentejas
                                        </Typography>
                                        <Typography variant={'caption'} >
                                            Bistec con papas
                                        </Typography>
                                        <Typography variant={'caption'} >
                                            Agua de limón
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight:500, fontSize:'12px' }} >
                                            500 kcal
                                        </Typography>
                                        <Typography sx={{ fontWeight:500, fontSize:'12px' }} >
                                            20g de proteína
                                        </Typography>
                                        <Typography sx={{ fontWeight:500, fontSize:'12px' }} >
                                            20g de carbohidratos
                                        </Typography>
                                        <Typography sx={{ fontWeight:500, fontSize:'12px' }} >
                                            20g de grasas
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{width:'100%', background:'white', padding:'1rem', borderRadius:'8px', boxSizing:'border-box'}} >
                            <Box sx={{display: 'flex', justifyContent:'space-between', width:'100%', alignItems:'center', }} >
                                <Typography sx={{ fontWeight:'bold' }} >
                                    Cena
                                </Typography>
                                <Typography variant={'subtitle2'} sx={{ color:'#bdbdbd' }}  >
                                    Ver más
                                </Typography>
                            </Box>
                            <Box sx={{ display:'flex', width:'100%', justifyContent:'space-between' }} >
                                <Box sx={{ display:'flex', alignItems:'flex-end' }} >
                                    <Button variant={'contained'} >
                                        Agregar
                                    </Button>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight:500, fontSize:'12px', color:'#bdbdbd'  }} >
                                        - kcal
                                    </Typography>
                                    <Typography sx={{ fontWeight:500, fontSize:'12px', color:'#bdbdbd'  }} >
                                        - de proteína
                                    </Typography>
                                    <Typography sx={{ fontWeight:500, fontSize:'12px', color:'#bdbdbd'  }} >
                                        - de carbohidratos
                                    </Typography>
                                    <Typography sx={{ fontWeight:500, fontSize:'12px', color:'#bdbdbd'  }} >
                                        - de grasas
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>





                            {/*<CarouselMenu cards={menuInfo}></CarouselMenu>*/}
                        </Box>
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
