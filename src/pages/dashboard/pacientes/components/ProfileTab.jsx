import React from 'react';
import {Box, Divider, Typography} from "@mui/material";

export default function ProfileTab({user}) {

	const {profile, diet, medical, personalData} = user;

	return (
		<Box>
			<Typography variant={'h5'} >
				Datos del paciente
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
			<Typography>
				{`Peso: ${personalData.weight}`}
			</Typography>
			<Typography>
				{`Altura: ${personalData.height}`}
			</Typography>
			<Typography>
				{`Genero: ${personalData.gender}`}
			</Typography>
			<Typography>
				{`Actividad física: ${personalData.physicalActivity}`}
			</Typography>
			<Typography>
				{`Objetivos específicos: ${personalData.specificObjectives}`}
			</Typography>
			<Divider/>
			<Typography variant={'h5'} >
				Preferencias de dieta
			</Typography>
			<Typography>
				{`Tipo de dieta: ${diet.type}`}
			</Typography>
			<Typography>
				{`Preferencias: ${diet.preferences}`}
			</Typography>
			<Typography>
				{`Alérgico a: ${diet.allergies}`}
			</Typography>
			<Typography>
				{`Restricciones: ${diet.restrictions}`}
			</Typography>
			<Typography>
				{`Intolerante a: ${diet.intolerances}`}
			</Typography>
			<Typography>
				{`Le gusta: ${diet.likes}`}
			</Typography>
			<Typography>
				{`No le gusta: ${diet.dislikes}`}
			</Typography>
			<Divider/>
			<Typography variant={'h5'} >
				Información médica
			</Typography>
			<Typography>
				{`Enfermedades crónicas: ${medical.chronicDiseases}`}
			</Typography>
			<Typography>
				{`Medicamentos: ${medical.medications}`}
			</Typography>
			<Typography>
				{`Alergico a medicamentos: ${medical.medicationsAllergies}`}
			</Typography>
			<Typography>
				{`Intolerante a medicamentos: ${medical.medicationsIntolerances}`}
			</Typography>
			<Typography>
				{`Restricciones a medicamentos: ${medical.medicationsRestrictions}`}
			</Typography>
			<Typography>
				{`No le gusta medicamentos: ${medical.medicationsDislikes}`}
			</Typography>
			<Typography>
				{`Terapia hormonal: ${medical.hormonalTherapy}`}
			</Typography>
			<Typography>
				{`Cirugías: ${medical.surgeries}`}
			</Typography>
			<Divider/>


		</Box>
	)
}
