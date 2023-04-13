import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import CheckboxList from "@pages/app/components/CheckboxList";

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

export default function UserRecipies() {
    const [progress, setProgress] = React.useState(10);
    return (
        <Card sx={{
            minWidth: 275,
            maxWidth: "90%",
            margin: "auto",
            marginTop: "20px",
            marginBottom: "10px",
            backgroundColor: "#CDCDCD"
        }}>
            <CardContent>
                <p style={{textAlign: "center"}}></p>
                <div style={{display: "flex"}}>
                    <div>
                        Integrante 1
                    </div>
                    <Card style={{
                        backgroundColor: "#38B2CD",
                        maxWidth: "25vw",
                        maxHeight: "3vh",
                        textAlign: "end",
                        marginLeft: "auto"
                    }}>
                        <CardContent style={{marginTop: "-2vh"}}>
                            <div>Optimo</div>
                        </CardContent>
                    </Card>
                </div>
                <Card style={{marginTop: "10px"}}>
                    <CardContent>
                        <div style={{display: "flex"}}>
                            <div style={{width: "33%"}}>Clorías</div>
                            <div style={{width: "33%"}}>Proteínas</div>
                            <div style={{width: "33%"}}>Grasas</div>
                        </div>
                        <div style={{display: "flex"}}>
                            <div style={{width: "33%"}}><Box sx={{width: '100%'}}>
                                <LinearProgressWithLabel value={progress}/>
                            </Box></div>
                            <div style={{width: "33%"}}><Box sx={{width: '100%'}}>
                                <LinearProgressWithLabel value={progress}/>
                            </Box></div>
                            <div style={{width: "33%"}}><Box sx={{width: '100%'}}>
                                <LinearProgressWithLabel value={progress}/>
                            </Box></div>
                        </div>
                    </CardContent>
                </Card>
                <CheckboxList numCheckboxes={2}/>
            </CardContent>
        </Card>
    )
}
