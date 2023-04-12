import {Fragment} from "react";
import SwipeableCarousel from "@components/SwipeableCarousel";
import {Box, Button} from "@mui/material";
import ButtonWithIcon from "@components/ButtonWithIcon";
import Container from "@mui/material/Container";

const cards = [
    {
        title: 'Card 1',
        img: 'https://source.unsplash.com/random/400x300',
    },
    {
        title: 'Card 2',
        img: 'https://source.unsplash.com/random/401x300',
    },
    {
        title: 'Card 3',
        img: 'https://source.unsplash.com/random/402x300',
    },
];

export default function App() {

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
                <ButtonWithIcon />
                <SwipeableCarousel cards={cards}/>
            </Container>
        </Box>
    )
}
