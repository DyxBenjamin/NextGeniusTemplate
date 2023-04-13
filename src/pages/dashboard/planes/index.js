import Nav from "@pages/dashboard/components/Nav";
import React, {useState} from "react";
import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import RecipeCard from "@pages/dashboard/recetas/components/RecipeCard";
import PlanCard from "@pages/dashboard/planes/components/PlanCard";
export default function Planes({}) {
	const [openCreatePlanModal, setOpenCreatePlanModal] = useState(false);
	const [filters, setFilters] = useState({
		search: '',
		category: 'All',
		calories: 'All',
		time: 'All',
	});
	const switchCreateRecipeModal = () => {
		setOpenCreatePlanModal(!openCreatePlanModal);
	}

	const handleFilters = (e) => {
		setFilters({
			...filters,
			[e.target.name]: e.target.value
		});
	}

	return (
		<Nav>
			<Box sx={{ padding:'2rem', width:'100%' }} >
				<Typography variant={'h5'} >
					Planes
				</Typography>
				<Typography>
					Crea planes de alimentación y adapta los valores nutricionales de acuerdo a las necesidades de tus pacientes.
				</Typography>
				<Box sx={{ margin:'2rem 0', width:'100%', display:'flex', flexDirection:'row', gap:'1rem' }} >
					<TextField
						sx={{ width:'250px' }}
						name='search'
						value={filters.search}
						onChange={handleFilters}
						id="outlined-basic" label="Buscar Plan" variant="outlined" />
					<FormControl>
						<InputLabel >Categoria</InputLabel>
						<Select
							sx={{ width:'200px' }}
							label='category'
							name='category'
							value={filters.category}
							onChange={handleFilters}>
							<MenuItem value={'All'}>Todos</MenuItem>
							<MenuItem value={'breakfast'}>Desayuno</MenuItem>
							<MenuItem value={'meal'}>Comida</MenuItem>
							<MenuItem value={'dinner'}>Cena</MenuItem>
							<MenuItem value={'other'}>Colacion</MenuItem>
						</Select>
					</FormControl>
					<FormControl>
						<InputLabel>Calorias</InputLabel>
						<Select
							sx={{ width:'200px' }}
							value={filters.calories}
							label='calorias'
							name='calories'
							onChange={handleFilters}>
							<MenuItem value={'All'}>Todos</MenuItem>
							<MenuItem value={'100'}> Menores a 100kcal </MenuItem>
							<MenuItem value={'300'}> Menores de 300kcal </MenuItem>
						</Select>
					</FormControl>
					<FormControl>
						<InputLabel>Tiempo</InputLabel>
						<Select
							sx={{ width:'200px' }}
							value={filters.time}
							label='Tiempo'
							name='time'
							onChange={handleFilters}>
							<MenuItem value={'All'}>Todos</MenuItem>
							<MenuItem value={'30'}> Menores a 30min </MenuItem>
							<MenuItem value={'45'}> Menores de 45min </MenuItem>
						</Select>
					</FormControl>
				</Box>
				<Box sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gridGap: '1rem',
					marginTop: '2rem'
				}} >
					<Button onClick={switchCreateRecipeModal} color={'primary'} sx={{ background:'#FAFAFA', padding:'1rem', borderRadius:'10px' }}>
						Agregar Plan
					</Button>
					<PlanCard/>
					<PlanCard/>
					<PlanCard/>
					<PlanCard/>
					<PlanCard/>
				</Box>
			</Box>
		</Nav>
	)
}
