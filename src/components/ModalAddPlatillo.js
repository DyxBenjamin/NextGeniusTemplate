import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Autocomplete, Stack } from '@mui/material';

const ModalAgregarPlatillo = ({ open, handleClose }) => {
    const [nombrePlatillo, setNombrePlatillo] = useState('');
    const [ingredientes, setIngredientes] = useState([]);

    const listaIngredientes = ['tomate', 'cebolla', 'ajo', 'perejil', 'cilantro', 'pimiento', 'pimiento rojo', 'champiñones', 'patatas', 'calabacín', 'zanahoria', 'apio', 'calabaza', 'maíz', 'garbanzos', 'lentejas', 'frijoles', 'pollo', 'carne de res', 'pescado', 'camarones', 'huevo', 'queso', 'crema'];

    const handleAgregarIngrediente = () => {
        setIngredientes([...ingredientes, '']);
    };

    const handleEliminarIngrediente = (index) => {
        const nuevosIngredientes = [...ingredientes];
        nuevosIngredientes.splice(index, 1);
        setIngredientes(nuevosIngredientes);
    };

    const handleCambioIngrediente = (valor, index) => {
        const nuevosIngredientes = [...ingredientes];
        nuevosIngredientes[index] = valor;
        setIngredientes(nuevosIngredientes);
    };

    const handleGuardar = () => {
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Agregar platillo</DialogTitle>
            <DialogContent>
                <TextField label="Nombre del platillo" value={nombrePlatillo} onChange={(e) => setNombrePlatillo(e.target.value)} fullWidth />
                <Stack direction="column" spacing={2} sx={{ mt: 2 }}>
                    {ingredientes.map((ingrediente, index) => (
                        <Stack key={index} direction="row" spacing={2}>
                            <Autocomplete
                                options={listaIngredientes}
                                value={ingrediente}
                                onChange={(e, newValue) => handleCambioIngrediente(newValue, index)}
                                renderInput={(params) => <TextField {...params} label={`Ingrediente ${index + 1}`} />}
                            />
                            <Button variant="outlined" color="error" onClick={() => handleEliminarIngrediente(index)}>Eliminar</Button>
                        </Stack>
                    ))}
                </Stack>
                <Button variant="outlined" sx={{ mt: 2 }} onClick={handleAgregarIngrediente}>Agregar ingrediente</Button>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleGuardar} disabled={nombrePlatillo === '' || ingredientes.length === 0} variant="contained">Guardar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalAgregarPlatillo;
