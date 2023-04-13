import React, {useState} from 'react';
import Nav from "@pages/dashboard/components/Nav";
import CreateRecipeModal from "@pages/dashboard/components/CreateRecipeModal";
import {Box, Button, MenuItem, Select, TextField, Typography} from "@mui/material";
import RecipeCard from "@pages/dashboard/components/RecipeCard";

export default function Recetas() {
	const [openCreateRecipeModal, setOpenCreateRecipeModal] = useState(false);

	const switchCreateRecipeModal = () => {
		setOpenCreateRecipeModal(!openCreateRecipeModal);
	}

	return (
		<Nav>
			<Box sx={{ padding:'2rem', width:'100%' }} >
				<Typography variant={'h5'} >
					Recetas
				</Typography>
				<Typography>
					Crea y administra las recetas de tus planes de alimentación.
				</Typography>
				<Box sx={{ margin:'2rem 0', width:'100%', display:'flex', flexDirection:'row', gap:'1rem' }} >
					<TextField
						sx={{ width:'250px' }}
						id="outlined-basic" label="Buscar Receta" variant="outlined" />
					<Select
						sx={{ width:'200px' }}
						value={'All'}
						onChange={()=>{}}>
						<MenuItem value={'All'}>Todos</MenuItem>
						<MenuItem value={'breakfast'}>Desayuno</MenuItem>
						<MenuItem value={'meal'}>Comida</MenuItem>
						<MenuItem value={'dinner'}>Cena</MenuItem>
						<MenuItem value={'other'}>Colacion</MenuItem>
					</Select>
				</Box>
				<Box sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gridGap: '1rem',
					marginTop: '2rem'
				}} >
					<Button onClick={switchCreateRecipeModal} color={'primary'} sx={{ background:'#FAFAFA', padding:'1rem', borderRadius:'10px' }}>
						Agregar receta
					</Button>
					<RecipeCard />
					<RecipeCard />
					<RecipeCard />
				</Box>

			</Box>


			<CreateRecipeModal open={openCreateRecipeModal} handleClose={switchCreateRecipeModal} data={'test'} />
		</Nav>
	);
}
