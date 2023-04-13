import {Box, Typography} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";

const messages = [
    {text: "Hechale poco queso", icon: <CheckCircleIcon sx={{color: "green"}}/>},
    {text: "Acompañalo con agua", icon: <CheckCircleIcon sx={{color: "green"}}/>},
    {
        text: "Los carbohidratos se ven bien",
        icon: <CheckCircleIcon sx={{color: "green"}}/>,
    },
    {text: "Las calorias son muy altas", icon: <ErrorIcon sx={{color: "red"}}/>},
    {text: "Bajo nivel de nutrientes", icon: <ErrorIcon sx={{color: "red"}}/>},
    {text: "Puedes agregar frijoles", icon: <WarningIcon sx={{color: "orange"}}/>},
    {text: "Tortilla puede funcionar", icon: <WarningIcon sx={{color: "orange"}}/>},
    {text: "No olvides agua natural", icon: <WarningIcon sx={{color: "orange"}}/>},
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

const RecommendsFood = ({formSend}) => {
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
                    {message.icon}
                    <Typography sx={{ml: 1}}>{message.text}</Typography>
                </Box>
            ))}
        </Box>
    );
};

export default RecommendsFood;
