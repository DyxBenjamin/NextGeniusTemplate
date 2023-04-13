import React, {Fragment, useEffect, useState} from "react";
import {Container, Box, Divider, Grid, Stack, Typography, TextField, Autocomplete} from "@mui/material";
import Button from "@mui/material/Button";
import * as r_ from "radash";
import useGetAPI from "@hooks/useGetAPI";
import CircularProgressComponent from "@components/circularProgressComponent";
import ButtonsFamiliarActivate from "@components/ButtonsFamiliarActivate";
import RecommendsFood from "@components/RecommendsFood";
import Router from "next/router";
import ModalAgregarPlatillo from "@components/ModalAddPlatillo";
import _ from "lodash";
import PlaceholderDishes from "@data/PlaceholderDishes";

export default function Index() {
	const [items, setItems] = useState([{}]);
	const [formSend, setFormSend] = useState(null);
	const [calorias, setCalorias] = useState(0);
	const [saveCal, setSaveCal] = useState(0);
	const [validateFood, setValidateFood] = useState(false);
	const {data: usersInfo, isLoading: usersIsLoading} = useGetAPI('/api/services/users');
	const [activeButtons, setActiveButtons] = useState([true, true, true]);
	const [openModal, setOpenModal] = useState(false);




	const [dishes, setDishes] = useState(PlaceholderDishes);
	const [selectedRecipe, setSelectedRecipe] = useState(null);
	const [menu, setMenu] = useState([]);


	console.log('%c << 📌 menu >>', 'color: white; font-size: 12px');
	console.log(menu);

	const calculateCalories = () => {
		let totalCalories = 0;
		items.forEach(item => {
			totalCalories += item.calorias;
		});
		setCalorias(totalCalories);
		setSaveCal(totalCalories);
	}



	const handlePlatilloSeleccionado = (event, value) => {
		setSelectedRecipe(dishes[value]);
	};
	const handleAddItem = () => {
		setItems([...items, selectedRecipe]);
	};
	const handleDeleteItem = (index, infoItem) => {
		const newItems = [...items];
		newItems.splice(index, 1);
		setItems(newItems);
		if (infoItem) {
			setCalorias(calorias - infoItem);
		}
	};
	const handleButtonClick = (index) => {
		const newActiveButtons = [...activeButtons];
		newActiveButtons[index] = !newActiveButtons[index];
		setActiveButtons(newActiveButtons);
	};
	const resetForm = () => {
		setValidateFood(false)
	}
	const handleOpenModal = () => {
		setOpenModal(true);
	};

	function aleatorioMultiploDe10(minimo) {
		const base = Math.ceil(minimo / 10);
		const aleatorio = base + Math.floor(Math.random() * 10);
		return aleatorio * 10;
	}


	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const handleAddDish = (dish) => {

		const update = dishes.find(dishfind => dishfind.label === dish);
		if (!update) return;
		setMenu([...menu, update]);
	}

	const handleDeleteDish = (index) => {
		const update = _.without(menu, _.nth(menu, index));
		setMenu(update);
	}

	const GetTotal = (key) => {
		let total = 0;
		menu.forEach(item => {
			total += item[key];
		});
		return total;
	}

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexGrow: 1,
					alignItems: "stretch",
				}}>
				<Container
					maxWidth="xl"
					sx={{mt: 1, display: "flex", flexDirection: "column"}}>
					<Button type="button" variant="contained" onClick={handleOpenModal}>
						Agrega tu platillo si no esta en la lista
					</Button>
					<ModalAgregarPlatillo open={openModal} handleClose={handleCloseModal}/>
				</Container>
			</Box>
			<Box
				sx={{
					mt: 2,
					display: "flex",
					flexGrow: 1,
					alignItems: "stretch",
				}}>
				<Container
					maxWidth="xl"
					sx={{
						backgroundColor: '#eeeeee',
						display: "flex",
						flexDirection: "column",
						borderRadius: '5px',
						padding: '10px',
						width: '90vw'
					}}>
					<Divider>
						<Box sx={{mb: 2, display: 'flex', textAlign: 'center'}}>
							<Typography sx={{flex: 1}} variant="h5">
								Agrega platillos
							</Typography>
						</Box>
					</Divider>
					<Stack spacing={2} direction="row">
						<Box sx={{width: '100%'}}>
							<Autocomplete
								id="country-input"
								fullWidth
								options={dishes}
								filterSelectedOptions={true}
								getOptionLabel={(option) => option.label}
								onClose={(event) => { handleAddDish(event.target.innerText) }}
								renderInput={(params) => (
									<TextField {...params} sx={{backgroundColor: 'white', mb: 1}}
											   label="Platillos" variant="outlined"/>
								)}
							/>
						</Box>
					</Stack>
					<Box sx={{ margin:'1rem 0' }} >
						{
							_.map(menu, (item, index) => {
								return (
									<Box key={index} sx={{ display:'flex', justifyContent:'space-between'}} >
										<Box key={index} sx={{ display:'flex', gap:'1.5rem' }} >
											<Typography onClick={ () => handleDeleteDish(index)} > X </Typography>
											<Typography>{item.label}</Typography>
										</Box>
										<Typography>{item.portion}</Typography>
									</Box>
								)
							})
						}
					</Box>
					<Box sx={{ display:'flex', background:'white', flexDirection:'column', alignItems:'center', padding:' 12px', borderRadius:'4px', justifyContent:'space-between'}} >
						<Typography sx={{ fontWeight:'bold' }} >Informacion nutrimental</Typography>
						<Box sx={{ display:'flex', justifyContent:'space-between', width:'100%' }} >
							<Typography>Calorias</Typography>
							<Typography>{GetTotal('calories')} Kcal</Typography>
						</Box>
						<Box sx={{ display:'flex', justifyContent:'space-between', width:'100%' }} >
							<Typography>Proteina</Typography>
							<Typography>{GetTotal('protein')} gr</Typography>
						</Box>
						<Box sx={{ display:'flex', justifyContent:'space-between', width:'100%' }} >
							<Typography>Grasas</Typography>
							<Typography>{GetTotal('grasas')} gr</Typography>
						</Box>
						<Box sx={{ display:'flex', justifyContent:'space-between', width:'100%' }} >
							<Typography>Carbohidratos</Typography>
							<Typography>{GetTotal('fiber')} gr</Typography>
						</Box>
					</Box>
				</Container>
			</Box>


			<Box sx={{mb: 1, mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
				<Typography>
					Comenzales
				</Typography>
				<Box sx={{mb: 1, mt: 1, display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center'}}>
					{usersInfo &&
						<ButtonsFamiliarActivate users={usersInfo} activeButtons={activeButtons}
												 onButtonClick={handleButtonClick}/>}
				</Box>
			</Box>

			<Box sx={{ marginBottom:'76px', display:'flex', flexDirection:'column', gap:'1rem', padding: '0 1.5rem' }} >
				{_.map(usersInfo, (user, index) => {
					return (
						<Box sx={{ display:'flex', background:'#eeeeee', flexDirection:'column', alignItems:'center', padding:' 12px', borderRadius:'4px', justifyContent:'space-between'}} >
							<Typography>{user.name}</Typography>
							<Box sx={{ display:'flex', justifyContent:'space-between', width:'100%' }} >
								<Typography>Calorias requeridas</Typography>
								<Typography>{user.requirements.calories} Kcal</Typography>
							</Box>
							<Box sx={{ display:'flex', justifyContent:'space-between', width:'100%' }} >
								<Typography>Proteina requerida</Typography>
								<Typography>{user.requirements.proteins} gr</Typography>
							</Box>
							<Box sx={{ display:'flex', justifyContent:'space-between', width:'100%' }} >
								<Typography>Grasas requeridas</Typography>
								<Typography>{user.requirements.fats} gr</Typography>
							</Box>
							<Box sx={{ display:'flex', justifyContent:'space-between', width:'100%' }} >
								<Typography>Carbohidratos requeridos</Typography>
								<Typography>{user.requirements.carbohydrates} gr</Typography>
							</Box>
							<Divider sx={{ margin:'1rem' }} />
							{ user.requirements.calories < GetTotal('calories') && GetTotal('calories') !== 0 &&
								<Box sx={{display:'flex', alignItems:'center', gap:'1rem', justifyContent:'space-between', width:'100%'}} >
									<Box sx={{ background:'red', width:'10px', height:'10px', borderRadius: '5px' }} ></Box>
									<Typography sx={{ textDecoration:'underline', cursor:'pointer' }}  >{`Reducir porcion ${ Math.abs( (user.requirements.calories - GetTotal('calories')) / 2) }gr para adecuar a las calorias requeridas`}</Typography>
								</Box>
							}

							{ user.requirements.proteins > GetTotal('protein') && GetTotal('protein') !== 0 &&
								<Box sx={{display:'flex', alignItems:'center', gap:'1rem', justifyContent:'space-between', width:'100%'}} >
									<Box sx={{ background:'red', width:'10px', height:'10px', borderRadius: '5px' }} ></Box>
									<Typography sx={{ textDecoration:'underline', cursor:'pointer' }}  >{`Agregar una porcion de ${(user.requirements.proteins - GetTotal('protein')) * 4 }gr de frijol complementara la dieta`}</Typography>
								</Box>
							}


						</Box>
					)
				})}
				<Box sx={{ display:'flex', flexDirection:'column', width:'100%', gap:'1rem' }} >
					<Button variant="contained" color="primary" onClick={() => Router.push(`/app/recetas`)}>
						Guardar
					</Button>
					<Button variant="outlined" color="primary" onClick={resetForm}>
						Cancelar
					</Button>
				</Box>
			</Box>


			{validateFood && <Box
				sx={{
					display: "flex",
					flexGrow: 1,
					alignItems: "stretch",
				}}>
				<Container
					maxWidth="xl"
					sx={{mt: 1, mb: 7, display: "flex", flexDirection: "column"}}>
					<Box sx={{mb: 1, display: 'flex', textAlign: 'center'}}>
						<Typography sx={{flex: 1}} variant="subtitle1">
							Recomendaciones Generales
						</Typography>
					</Box>
					{!r_.isEmpty(formSend) ? <Box sx={{mb: 1, display: 'flex', textAlign: 'left'}}>
						<RecommendsFood check={true}/>
					</Box> : <CircularProgressComponent/>}
					<Box sx={{mb: 1, display: 'flex', alignSelf: 'center'}}>
						<Stack direction="row" spacing={2}>

						</Stack>
					</Box>
				</Container>
			</Box>}
		</>
	)
}
