import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import _ from "lodash";
import {Fragment, useState} from "react";
import {Box, Modal} from "@mui/material";

export default function ArticlesSD({articles}) {
    const [modals, setModals] = useState([]);

    const handleOpen = (index) => {
        const newModals = [...modals];
        newModals[index] = true;
        setModals(newModals);
    };

    const handleClose = (index) => {
        const newModals = [...modals];
        newModals[index] = false;
        setModals(newModals);
    };

    const mapAllArt = () => {
        return articles.map((valueArt, index) => {
            return (
                <Fragment key={`artSD_${index}`}>
                    <Card sx={{maxWidth: 345, mb: 2}}>
                        <CardMedia component="img" alt="green iguana" height="140" image={valueArt.image}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {valueArt.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {valueArt.description.slice(0, 150)}...
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => handleOpen(index)}>Leer Mas..</Button>
                        </CardActions>
                    </Card>
                    <Modal
                        open={modals[index]}
                        onClose={() => handleClose(index)}
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                bgcolor: "white",
                                boxShadow: 24,
                                p: 4,
                                overflowY: "scroll",
                                maxHeight: "90vh",
                            }}>
                            <Typography id="modal-title" variant="h4" component="h2" mb={2} textAlign="center">
                                {valueArt.title}
                            </Typography>
                            <Typography id="modal-description" variant="body1" mb={2}>
                                {valueArt.description}
                            </Typography>
                            <Button onClick={() => handleClose(index)}>Cerrar</Button>
                        </Box>
                    </Modal>
                </Fragment>
            );
        });
    };

    return <Fragment>{mapAllArt()}</Fragment>;
}
