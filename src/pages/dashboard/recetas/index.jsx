import React, {useState} from 'react';
import Nav from "@pages/dashboard/components/Nav";
import CreateRecipeModal from "@pages/dashboard/components/CreateRecipeModal";
import {Button} from "@mui/material";

export default function Recetas() {
	const [openCreateRecipeModal, setOpenCreateRecipeModal] = useState(false);

	const switchCreateRecipeModal = () => {
		setOpenCreateRecipeModal(!openCreateRecipeModal);
	}

	return (
		<Nav>
			<h1>Recetas</h1>

			<Button onClick={switchCreateRecipeModal} >
				Crear receta
			</Button>
			<CreateRecipeModal open={openCreateRecipeModal} handleClose={switchCreateRecipeModal} data={'test'} />
		</Nav>
	);
}
