import React from 'react';
import {Box, Button, Modal, Typography} from "@mui/material";

const styles = {
	modal: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	}
}
export default function CreatePlanModal({ open, handleClose, data }) {
	return (<>
			{data &&
				<Modal
					open={open}
					onClose={handleClose}>
					<Box sx={styles.modal}>
						<Typography variant={'h6'}>
							Crear Plan
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
