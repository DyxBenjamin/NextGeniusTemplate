import {Fragment} from "react";
import SwipeableCarousel from "@components/SwipeableCarousel";
import {Box, Divider, Stack, Typography} from "@mui/material";
import ButtonWithIcon from "@components/ButtonWithIcon";
import Container from "@mui/material/Container";
import ButtonProfile from "@components/ButtonProfile";
import useGetAPI from "@hooks/useGetAPI";
import CircularProgressComponent from "@components/circularProgressComponent";
import ButtonsFamiliars from "@components/ButtonsFamiliars";
import ArticlesSD from "@components/ArticlesSD";
import Button from "@mui/material/Button";
import Image from "next/image";

export default function App() {
    const {data: cardsInfo, isLoading: cardIsLoading} = useGetAPI('/api/services/cards');
    const {data: usersInfo, isLoading: usersIsLoading} = useGetAPI('/api/services/users');
    const {data: articInfo, isLoading: artIsLoading} = useGetAPI('/api/services/articles');

    if (cardIsLoading || usersIsLoading || artIsLoading) {
        return (
            <CircularProgressComponent/>
        )
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexGrow: 1,
                alignItems: "stretch",
                minHeight: "100vh"
            }}>
            <Container
                maxWidth="xl"
                sx={{mt: 2, display: "flex", flexDirection: "column"}}>
                <Box sx={{ display: 'flex', alignItems:'center', flexDirection:'column', justifyContent:'center' }} >
                    <Typography variant="h4">
                        Hola, Benjamin.
                    </Typography>
                    <Typography variant="subtitle1">
                        Es un gusto tenerte por aqui de vuelta.
                    </Typography>
                    <ButtonWithIcon/>
                </Box>
                <Box sx={{mb: 1, display: 'flex', textAlign: 'center'}}>

                    <Typography sx={{flex: 1}} variant="subtitle1">
                        Miembros de la familia
                    </Typography>
                </Box>
                <Box sx={{mb: 1, display: 'flex', textAlign: 'center'}}>
                    <Typography sx={{flex: 1}} variant="subtitle2">
                        Un perfil completo mejorara las recomendaciones nutrimentales
                    </Typography>
                </Box>
                <Box sx={{mb: 1, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    {usersInfo && <ButtonsFamiliars users={usersInfo}/>}
                    <ButtonProfile/>
                </Box>
                <Button variant={'contained'} sx={{margin:'1rem 0', padding:'0.5rem 0'}}  >
                    Agenda una consulta nutricional
                </Button>

                <Box sx={{mb: 1, display: 'flex', textAlign: 'center'}}>
                    <Typography sx={{flex: 1}} variant="subtitle1">
                        Recetas del Dia
                    </Typography>
                </Box>
                <Box sx={{mb: 1}}>
                    <SwipeableCarousel cards={cardsInfo}/>
                </Box>
                <Box sx={{mb: 1, display: 'flex', textAlign: 'center'}}>
                    <Typography sx={{flex: 1}} variant="subtitle1">
                        Articulos de Interes
                    </Typography>
                </Box>
                <Box sx={{mb: 7}}>
                    <ArticlesSD articles={articInfo}/>
                </Box>
            </Container>
        </Box>
    )
}
