import {
    Box, Card, CardMedia, Fab, Modal, Typography, TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper
} from '@mui/material';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import React, {useState} from "react";
import _ from "lodash"
import Router from "next/router";

const styles = {
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "70%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        overflow: "scroll"
    }
}
const CarouselMenuCards = ({recipeName, title, calories, image, ingredients}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Card style={{marginBottom: "10px"}}>
            <CardContent>
                <div style={{display: "flex"}}>
                    {title}
                    <img src={image} style={{
                        maxHeight: "30px",
                        maxWidth: "50px",
                        marginRight: "20%",
                        marginLeft: "20%",
                        marginTop: "-1vh"
                    }} alt="Imagen de ejemplo"/>
                    <CardActions style={{marginLeft: "auto", marginTop: "-5%"}}>
                        <Button size="small" style={{backgroundColor: "#FFFFFF"}}
                                onClick={handleOpen}>
                            Ver receta
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-title"
                            aria-describedby="modal-description">
                            <Box
                                sx={
                                    styles.modal
                                }>
                                <Typography id="modal-title" variant="h4" component="h2" mb={2} textAlign="center">
                                    {title}
                                </Typography>
                                <Typography id="modal-description" variant="body1" mb={2}>
                                    Calorias totales: {calories}
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Ingrediente</TableCell>
                                                <TableCell align="right">Cantidad</TableCell>
                                                <TableCell align="right">Calorias</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {ingredients.map((_, i) => (
                                                <TableRow
                                                    key={_.name}
                                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                                    <TableCell component="th" scope="row">
                                                        {_.name}
                                                    </TableCell>
                                                    <TableCell align="right">{_.quantity}</TableCell>
                                                    <TableCell align="right">{_.calories}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Button onClick={handleClose}>Cerrar</Button>
                            </Box>
                        </Modal>
                    </CardActions>
                </div>
                {calories && <p>{calories} kcal Totales</p>}
                <p>{recipeName}</p>
                {!calories &&
                    <Fab color="primary" aria-label="add" sx={{margin: "auto", marginLeft: "40%", marginRight: "40%"}}
                         onClick={() => Router.push(`/app/crear`)}>
                        <AddIcon/>
                    </Fab>}
            </CardContent>
        </Card>
    )
        ;
};

export default CarouselMenuCards;
