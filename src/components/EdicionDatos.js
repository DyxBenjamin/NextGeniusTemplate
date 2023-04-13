import React from "react";
import {Box, Button, Modal, Typography} from "@mui/material";
import {TextField} from "@mui/material";
import {useState} from "react";

const styles = {
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height:"70%",
        width: "70%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        overflow:"scroll"
    }
}
export default function EdicionDatos({open, handleClose, data}) {
    const [userName, setUserName] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    return (
        <Modal style={{margin: "auto"}}
            open={open}
            onClose={handleClose}>
            <Box sx={styles.modal}>
                <Typography variant={'h6'}>
                    Edita los datos de tu perfil
                </Typography>
                <TextField
                    label="Nombre del usuario"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <TextField
                    label="Fecha de nacimiento"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    value={fechaNacimiento}
                    onChange={(event) => setFechaNacimiento(event.target.value)}
                />
                <TextField
                    label="Correo electronico"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <TextField
                    label="Telefono"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    value={fechaNacimiento}
                    onChange={(event) => setFechaNacimiento(event.target.value)}
                />
                <TextField
                    label="Peso"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <TextField
                    label="Altura"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    value={fechaNacimiento}
                    onChange={(event) => setFechaNacimiento(event.target.value)}
                />
                <TextField
                    label="Genero"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <TextField
                    label="Actividad Física"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    value={fechaNacimiento}
                    onChange={(event) => setFechaNacimiento(event.target.value)}
                />
                <TextField
                    label="Tipo de dieta"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <Button onClick={handleClose}>
                    Cancelar
                </Button>
            </Box>
        </Modal>
    )
}
