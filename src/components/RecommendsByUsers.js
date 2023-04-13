import {Box, Button, Grid, Stack, Typography, Container} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";
import Brightness1Icon from '@mui/icons-material/Brightness1';
import React, {Fragment, useState} from "react";
import _ from "lodash";
import RecommendsFood from "@components/RecommendsFood";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import LinearProgress from "@mui/material/LinearProgress";

const status = [
    {text: "Suficiente", icon: <CheckCircleIcon sx={{color: "green"}}/>},
    {text: "Deficit", icon: <WarningIcon sx={{color: "orange"}}/>},
    {text: "Insuficiente", icon: <ErrorIcon sx={{color: "red"}}/>},
    {text: "Optimo", icon: <Brightness1Icon sx={{color: "#3A6CBBFF"}}/>},
];

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Box sx={{width: '100%', mr: 1}}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{minWidth: 35}}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

const RecommendsByIUsers = ({users}) => {
    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * status.length));
    const [progress, setProgress] = React.useState(10);
    const mapRecoms = () => {
        const AllRecomUser = []
        _.each(users, (info, index) => {
            const userRec = (
                <Box
                    key={`userRec_${index}`}
                    sx={{
                        m: 2,
                        borderRadius: 2,
                        bgcolor: '#f8f8f8',
                    }}>
                    <Container
                        maxWidth="xl"
                        sx={{mt: 1, mb: 1, display: "flex", flexDirection: "column"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={7}>
                                <Box sx={{
                                    mt: 1,
                                    display: 'flex',
                                    textAlign: 'center',
                                    borderRadius: 3,
                                    bgcolor: 'white'
                                }}>
                                    <Typography sx={{flex: 1}} variant="h6">
                                        {info.name}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={5}>
                                <Box sx={{
                                    mt: 1,
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
                                <Container
                                    maxWidth="xl"
                                    sx={{
                                        mt: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        padding: 1,
                                        borderRadius: 2,
                                        bgcolor: 'white'
                                    }}>
                                    <div style={{display: "flex"}}>
                                        <div style={{width: "33%"}}>Calorías</div>
                                        <div style={{width: "33%"}}>Proteínas</div>
                                        <div style={{width: "33%"}}>Grasas</div>
                                    </div>
                                    <div style={{display: "flex"}}>
                                        <div style={{width: "33%"}}><Box sx={{width: '100%'}}>
                                            <LinearProgressWithLabel value={45}/>
                                        </Box></div>
                                        <div style={{width: "33%"}}><Box sx={{width: '100%'}}>
                                            <LinearProgressWithLabel value={80}/>
                                        </Box></div>
                                        <div style={{width: "33%"}}><Box sx={{width: '100%'}}>
                                            <LinearProgressWithLabel value={56}/>
                                        </Box></div>
                                    </div>
                                </Container>
                            </Grid>
                            <Grid item xs={12}>
                                <RecommendsFood check={false}/>
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
