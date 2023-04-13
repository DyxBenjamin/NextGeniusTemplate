import React, {useState} from 'react';
import Nav from "@pages/dashboard/components/Nav";
import CreateRecipeModal from "@pages/dashboard/components/CreateRecipeModal";
import {Box, Button, Typography} from "@mui/material";

export default function Recetas() {
	const [openCreateRecipeModal, setOpenCreateRecipeModal] = useState(false);

	const switchCreateRecipeModal = () => {
		setOpenCreateRecipeModal(!openCreateRecipeModal);
	}

	return (
		<Nav>
			<Box sx={{ padding:'2rem' }} >
				<Typography variant={'h5'} >
					Pacientes
				</Typography>
				<Typography>
					En esta sección podrás ver todos los pacientes que tienes asignados a tu cuenta.
				</Typography>
			</Box>

			<Button onClick={switchCreateRecipeModal} >
				Crear receta
			</Button>
			<CreateRecipeModal open={openCreateRecipeModal} handleClose={switchCreateRecipeModal} data={'test'} />
		</Nav>
	);
}
