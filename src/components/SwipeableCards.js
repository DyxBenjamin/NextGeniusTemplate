import {
    Box,
    Card,
    CardMedia, Modal,
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import React, {Fragment, useState} from "react";
import Button from "@mui/material/Button";

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
const SwipeableCards = ({img, title, calories, ingredients}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Fragment>
            <Card sx={{maxWidth: 400}} onClick={handleOpen}>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt={title}
                />
                <Typography variant="subtitle2">{title}</Typography>
            </Card>
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
        </Fragment>

    );
};

export default SwipeableCards;
