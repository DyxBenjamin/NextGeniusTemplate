import {Fragment} from "react";
import ArticlesSD from "@components/ArticlesSD";
import {Box, Container, Typography} from "@mui/material";
import useGetAPI from "@hooks/useGetAPI";
import CircularProgressComponent from "@components/circularProgressComponent";

export default function Index() {
    const {data: articInfo, isLoading: artIsLoading} = useGetAPI('/api/services/articles');

    if (artIsLoading) {
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
                <Box sx={{mb: 1, display: 'flex', textAlign: 'center'}}>
                    <Typography sx={{flex: 1}} variant="h5">
                        Articulos de Interes
                    </Typography>
                </Box>s
                <Box sx={{mb: 7}}>
                    <ArticlesSD articles={articInfo}/>
                </Box>
            </Container>
        </Box>
    )
}
