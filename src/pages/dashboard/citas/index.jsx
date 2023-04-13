import React from 'react';
import Nav from "@pages/dashboard/components/Nav";
import {Box, Typography} from "@mui/material";

export default function Citas() {
	return (
		<Nav>
			<Box sx={{ padding:'2rem' }} >
				<Typography variant={'h5'} >
					Citas
				</Typography>
				<Typography>
					Administra tus citas con tus pacientes de forma sencilla y eficiente
				</Typography>
			</Box>
		</Nav>
	);
}
