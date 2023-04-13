import React from "react";
import {Box, Button, Modal, Typography} from "@mui/material";
import {TextField} from "@mui/material";
import {useState} from "react";
import {Chip} from "@mui/material";

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
    const [selectedChips, setSelectedChips] = useState([]);
    const [selectedChipsActividad, setSelectedChipsActividad] = useState([]);

    const handleChipClick = (value) => {
        if (selectedChips.includes(value)) {
            setSelectedChips(selectedChips.filter((chip) => chip !== value));
        } else {
            setSelectedChips([...selectedChips, value]);
        }
    };
    const handleChipClickActivity = (value) => {
        if (selectedChipsActividad.includes(value)) {
            setSelectedChipsActividad(selectedChipsActividad.filter((chip) => chip !== value));
        } else {
            setSelectedChipsActividad([...selectedChipsActividad, value]);
        }
    };
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
                <p>Actividad fisica</p>
                <Chip
                    label="Sedentario"
                    onClick={() => handleChipClick("Sedentario")}
                    color={selectedChips.includes("Sedentario") ? "primary" : "default"}
                />
                <Chip
                    label="Actividad moderada"
                    onClick={() => handleChipClick("Actividad moderada")}
                    color={selectedChips.includes("Actividad moderada") ? "primary" : "default"}
                />
                <Chip
                    label="Deportista de alto rendimiento"
                    onClick={() => handleChipClick("Deportista de alto rendimiento")}
                    color={selectedChips.includes("Deportista de alto rendimiento") ? "primary" : "default"}
                />
                <p>Opciones Seleccionadas: {selectedChips.join(", ")}</p>
                <p>Tipo de dieta</p>
                <Chip
                    label="Dieta Vegana"
                    onClick={() => handleChipClickActivity("Dieta Vegana")}
                    color={selectedChipsActividad.includes("Dieta Vegana") ? "primary" : "default"}
                />
                <Chip
                    label="Dieta volumétrica"
                    onClick={() => handleChipClickActivity("Dieta volumétrica")}
                    color={selectedChipsActividad.includes("Dieta volumétrica") ? "primary" : "default"}
                />
                <Chip
                    label="Dieta mediterránea"
                    onClick={() => handleChipClickActivity("Dieta mediterránea")}
                    color={selectedChipsActividad.includes("Dieta mediterránea") ? "primary" : "default"}
                />
                <p>Opciones seleccionadas: {selectedChipsActividad.join(", ")}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <Button onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="solid" style={{backgroundColor:"#12A76C"}} onClick={handleClose}>
                        Guardar
                    </Button>
                </div>
            </Box>
        </Modal>
    )
}
