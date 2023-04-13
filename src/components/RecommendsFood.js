import {Box, Checkbox, Typography} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";
import React, {Fragment} from "react";

const messages = [
    {text: "Intenta cambiar tu aceite por girasol u oliva", icon: <CheckCircleIcon sx={{color: "green"}}/>},
    {text: "No olvides consumir 2.5 litros de agua", icon: <CheckCircleIcon sx={{color: "green"}}/>},
    {
        text: "Los valores nutrimentales son adecuados",
        icon: <CheckCircleIcon sx={{color: "green"}}/>,
    },
    {text: "Tu consumo de calorias es alto", icon: <ErrorIcon sx={{color: "red"}}/>},
    {text: "El aporte nutricional fue bajo", icon: <ErrorIcon sx={{color: "red"}}/>},
    {text: "Puedes agregar frijoles para compensar la proteina", icon: <WarningIcon sx={{color: "orange"}}/>},
    {text: "Reduce tu consumo de tortilla en 1pz", icon: <WarningIcon sx={{color: "orange"}}/>},
];

const getRandomMessages = () => {
    const randomMessages = [];
    while (randomMessages.length < 5) {
        const randomIndex = Math.floor(Math.random() * messages.length);
        if (!randomMessages.includes(randomIndex)) {
            randomMessages.push(randomIndex);
        }
    }
    return randomMessages.map((index) => messages[index]);
};

const RecommendsFood = ({check}) => {
    const randomMessages = getRandomMessages();

    return (
        <Box>
            {randomMessages.map((message, index) => (
                <Box
                    key={index}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        my: 1,
                        p: 1,
                        borderRadius: 5,
                        bgcolor:
                            message.icon.props.sx.color === "green"
                                ? "#E6F4EA"
                                : message.icon.props.sx.color === "orange"
                                    ? "#FFF4E1"
                                    : "#FEEAE8",
                    }}
                >
                    {check && <Checkbox />}
                    {message.icon}
                    <Typography sx={{ml: 1}}>{message.text}</Typography>
                </Box>
            ))}
        </Box>
    );
};

export default RecommendsFood;
