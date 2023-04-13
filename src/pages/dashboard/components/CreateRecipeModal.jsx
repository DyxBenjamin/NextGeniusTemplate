import React from "react";
import {Box, Button, Modal, Typography} from "@mui/material";

export default function CreateRecipeModal({open, handleClose, data}) {
	return (<>
			{ data &&
				<Modal open={open} onClose={handleClose}>
					<Box>
						<Typography variant={'h6'}>
							Crear receta
						</Typography>

						<Button onClick={handleClose}>
							Cerrar
						</Button>
					</Box>
				</Modal>
			}
		</>
	);
}
