import React, {Fragment, useState} from "react";
import {Container, Box, Divider, Grid, Stack, Typography, TextField, Autocomplete} from "@mui/material";
import Button from "@mui/material/Button";
import * as r_ from "radash";
import useGetAPI from "@hooks/useGetAPI";
import CircularProgressComponent from "@components/circularProgressComponent";
import ButtonsFamiliarActivate from "@components/ButtonsFamiliarActivate";

export default function Index() {
    const [items, setItems] = useState([{}]);
    const [calorias, setCalorias] = useState(0);
    const [saveCal, setSaveCal] = useState(0);
    const [platilloSeleccionado, setPlatilloSeleccionado] = useState(null);
    const {data: allRecipes, isLoading: allIsLoading} = useGetAPI('/api/services/platillos');
    const {data: usersInfo, isLoading: usersIsLoading} = useGetAPI('/api/services/users');
    // const fillActiveButtons = !r_.isEmpty(usersInfo) ? Array(usersInfo.length).fill(true) : []
    const [activeButtons, setActiveButtons] = useState([true, true, true]);

    if (allIsLoading || usersIsLoading) {
        return (
            <CircularProgressComponent/>
        )
    }
    const handlePlatilloSeleccionado = (event, value, index) => {
        if (value) {
            const newItems = [...items];
            newItems[index] = value;
            setItems(newItems);
            setPlatilloSeleccionado(value);
            setCalorias(calorias + value.calories);
            setSaveCal(value.calories)
        } else if (saveCal) {
            setCalorias(calorias - saveCal);
        }
    };
    const handleAddItem = () => {
        setItems([...items, {}]);
    };
    const handleDeleteItem = (index, infoItem) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
        if (infoItem) {
            setCalorias(calorias - infoItem);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const finalModel = {}
        if (!r_.isEmpty(items)) Object.assign(finalModel, {platillos: items})
        if (!r_.isEmpty(activeButtons)) Object.assign(finalModel, {personas: activeButtons.length})
        if (!r_.isEmpty(calorias)) Object.assign(finalModel, {totalCal: calorias})
        console.log(finalModel)
    };
    const handleButtonClick = (index) => {
        const newActiveButtons = [...activeButtons];
        newActiveButtons[index] = !newActiveButtons[index];
        setActiveButtons(newActiveButtons);
    };
    return (
        <Fragment>
            <Box
                sx={{
                    mt: 2,
                    display: "flex",
                    flexGrow: 1,
                    alignItems: "stretch",
                }}>
                <Container
                    maxWidth="xl"
                    sx={{
                        backgroundColor: '#868589',
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: '5px',
                        padding: '10px',
                        width: '90vw'
                    }}>
                    <Divider>
                        <Box sx={{mb: 2, display: 'flex', textAlign: 'center'}}>
                            <Typography sx={{flex: 1}} variant="h5">
                                Agrega platillos
                            </Typography>
                        </Box>
                    </Divider>
                    <form onSubmit={handleSubmit}>
                        {items.map((item, index) => (
                            <Stack key={index} spacing={2} direction="row">
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <Autocomplete
                                            id="country-input"
                                            options={allRecipes}
                                            getOptionLabel={(option) => option.label}
                                            onChange={(event, newValue) => handlePlatilloSeleccionado(event, newValue, index)}
                                            renderInput={(params) => (
                                                <TextField {...params} sx={{backgroundColor: 'white', mb: 1}}
                                                           label="Platillos" variant="outlined"/>
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{
                                            mb: 2, display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            <Button
                                                type="button"
                                                variant="outlined"
                                                sx={{backgroundColor: 'white'}}
                                                onClick={() => handleDeleteItem(index, item?.calories)}>
                                                Eliminar
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>

                            </Stack>
                        ))}
                        <Button type="button" variant="contained" onClick={handleAddItem}>
                            Agregar platillo
                        </Button>
                        <Box sx={{mb: 1, mt: 1, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            {usersInfo &&
                                <ButtonsFamiliarActivate users={usersInfo} activeButtons={activeButtons}
                                                         onButtonClick={handleButtonClick}/>}
                        </Box>
                        {!r_.isEmpty(items) && <Button type="submit" variant="contained" sx={{ml: 2}}>
                            Calcular
                        </Button>}
                    </form>
                </Container>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexGrow: 1,
                    alignItems: "stretch",
                }}>
                <Container
                    maxWidth="xl"
                    sx={{mt: 1, display: "flex", flexDirection: "column"}}>
                    <Button type="button" variant="contained">
                        Agrega tu platillo si no esta en la lista
                    </Button>
                </Container>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexGrow: 1,
                    alignItems: "stretch",
                }}>
                <Container
                    maxWidth="xl"
                    sx={{mt: 1, display: "flex", flexDirection: "column"}}>
                    TEST: {calorias}
                </Container>
            </Box>
        </Fragment>
    )
}
