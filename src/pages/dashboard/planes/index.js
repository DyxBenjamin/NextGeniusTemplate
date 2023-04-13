import Nav from "@pages/dashboard/components/Nav";
import React, {useState} from "react";
import {
	Box,
	Button, Chip,
	FormControl,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	TextField,
	Typography
} from "@mui/material";
import PlanCard from "@pages/dashboard/planes/components/PlanCard";
import CreatePlanModal from "@pages/dashboard/planes/components/CreatePlanModal";
export default function Planes({}) {
	const [openCreatePlanModal, setOpenCreatePlanModal] = useState(false);
	const [filters, setFilters] = useState({
		search: '',
		category: 'All',
		tags: [],
		time: 'All',
	});
	const switchCreatePlanModal = () => {
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
						<InputLabel>Tags</InputLabel>
						<Select
							sx={{ width:'200px' }}
							value={filters.tags}
							multiple
							label='calorias'
							name='tags'
							input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
							renderValue={(selected) => (
								<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
									{selected.map((value) => (
										<Chip key={value} label={value} size="small"  />
									))}
								</Box>
							)}
							onChange={handleFilters}>
							<MenuItem value={'tag1'}> tag 1  </MenuItem>
							<MenuItem value={'tag2'}> tag 2 </MenuItem>
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
					<Button onClick={switchCreatePlanModal} color={'primary'} sx={{ background:'#FAFAFA', padding:'1rem', borderRadius:'10px' }}>
						Agregar Plan
					</Button>
					<PlanCard/>
					<PlanCard/>
					<PlanCard/>
					<PlanCard/>
					<PlanCard/>
				</Box>
			</Box>
			<CreatePlanModal open={openCreatePlanModal} handleClose={switchCreatePlanModal} data={'test'} />
		</Nav>
	)
}
