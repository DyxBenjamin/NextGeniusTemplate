import {Box, Button, Grid, Stack, Typography, Container} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";
import Brightness1Icon from '@mui/icons-material/Brightness1';
import React, {Fragment, useState} from "react";
import _ from "lodash";
import RecommendsFood from "@components/RecommendsFood";

const status = [
    {text: "Suficiente", icon: <CheckCircleIcon sx={{color: "green"}}/>},
    {text: "Deficit", icon: <WarningIcon sx={{color: "orange"}}/>},
    {text: "Insuficiente", icon: <ErrorIcon sx={{color: "red"}}/>},
    {text: "Optimo", icon: <Brightness1Icon sx={{color: "blue"}}/>},
];

const RecommendsByIUsers = ({users}) => {
    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * status.length));

    const mapRecoms = () => {
        const AllRecomUser = []
        _.each(users, (info, index) => {
            const userRec = (
                <Box
                    key={`userRec_${index}`}
                    sx={{
                        mb: 2,
                        borderRadius: 5,
                        bgcolor: '#868589',
                    }}>
                    <Container
                        maxWidth="xl"
                        sx={{mt: 1, mb: 1, display: "flex", flexDirection: "column"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={7}>
                                <Typography sx={{flex: 1}} variant="h6">
                                    {info.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    borderRadius: 3,
                                    bgcolor:
                                        status[randomIndex].icon.props.sx.color === "green"
                                            ? "#E6F4EA"
                                            : status[randomIndex].icon.props.sx.color === "orange"
                                                ? "#FFF4E1"
                                                : "#FEEAE8",
                                }}>
                                    {status[randomIndex].icon}
                                    <Box sx={{ml: 1}}>
                                        <Typography sx={{flex: 1}} variant="subtitle1">
                                            {status[randomIndex].text}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <RecommendsFood/>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            )
            AllRecomUser.push(userRec)
        })
        return AllRecomUser
    }

    return (
        <Fragment>
            {mapRecoms()}
        </Fragment>
    );
};

export default RecommendsByIUsers;
