import React from 'react';
import {Box, Typography} from "@mui/material";

export default function ProfileTab({user}) {

	const {profile} = user;

	return (
		<Box sx={{ display:'flex' }} >
			<Typography variant={'h5'} >
				Informacion del paciente
			</Typography>
			<Typography>
				{`Nombre: ${profile.name} ${profile.lastName}`}
			</Typography>
			<Typography>
				{`Email: ${profile.email}`}
			</Typography>
			<Typography>
				{`Telefono: ${profile.phone}`}
			</Typography>
			<Typography>
				{`Fecha de nacimiento: ${profile.birthDate}`}
			</Typography>
		</Box>
	)
}
