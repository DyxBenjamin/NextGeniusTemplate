import React from 'react';
import Nav from "@pages/dashboard/components/Nav";
import {Box, Typography} from "@mui/material";

export default function Publicaciones() {
	return (
		<Nav>
			<Box sx={{ padding:'2rem' }} >
				<Typography variant={'h5'} >
					Publicaciones
				</Typography>
				<Typography>
					Crea y administra tus publicaciones para compartir con tus pacientes
				</Typography>
			</Box>
		</Nav>
	);
}
