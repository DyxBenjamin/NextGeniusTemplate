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
                <Stack direction="column" spacing={1} sx={{m: 1}}>
                    <Typography variant="h4">
                        Hola, user_name.
                    </Typography>
                    <Typography variant="subtitle1">
                        Es un gusto tenerte por aqui de vuelta.
                    </Typography>
                </Stack>
                <ButtonWithIcon/>
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
