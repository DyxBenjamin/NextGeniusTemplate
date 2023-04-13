import Nav from "@pages/dashboard/components/Nav";
import React from "react";
import {
	Box,
	MenuItem,
	Select,
	Table, TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Typography
} from "@mui/material";
import ClientRow from "@pages/dashboard/components/ClientRow";
export default function Pacientes({}) {
	return (
		<Nav>
			<Box sx={{ padding:'2rem', width:'100%' }} >
				<Typography variant={'h5'} >
					Pacientes
				</Typography>
				<Typography>
					En esta sección podrás ver todos los pacientes que tienes asignados a tu cuenta.
				</Typography>
				<Box sx={{ margin:'2rem 0', width:'100%' }} >
					<TextField id="outlined-basic" label="Buscar cliente" variant="outlined" />
					<Select
						value={'Active'}
						label="status"
						onChange={()=>{}}>
						<MenuItem value={'Active'}>Activos</MenuItem>
						<MenuItem value={'Inactive'}>Inactivos</MenuItem>
						<MenuItem value={'All'}>Todos</MenuItem>
					</Select>
				</Box>
				<Box >
					<TableContainer style={{
						overflowX: "auto",
						boxShadow: '0px 0px 1px -1px rgb(0 0 0 / 0.20), 0px 1px 1px 0px rgb(0 0 0 / 0.14), 0px 1px 3px 0px rgb(0 0 0 / 0.12)',
						border: '0.5px solid var(--gray-300)',
						borderRadius: '8px',
						width: '100%'
					}}>
						<Table fullWidth >
							<TableHead>
								<TableRow>
									<TableCell
										align="left"
										sx={{
											width: '300px'
										}}>
										Paciente
									</TableCell>
									<TableCell
										align="center"
										sx={{
											textAlign: 'center!important',
											width: '150px',
										}}>
										Planes pendientes
									</TableCell>
									<TableCell align="left">Proximo Plan</TableCell>
									<TableCell align="left">Feedback</TableCell>
									<TableCell
										align="center"
										sx={{
											textAlign: 'center!important',
											width: '100px',
										}}>
										Status
									</TableCell>
									<TableCell align="left" style={{width: '100px'}}>
										Actions
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<ClientRow client={{name: 'benjamin', status:'Active', id:42}}  />
								<ClientRow />
								<TableRow>
									<TableCell align="left"> Maria Antonieta </TableCell>
									<TableCell align="center"> 3 </TableCell>
									<TableCell align="left"> Deficit - Calorico (Maria) </TableCell>
									<TableCell align="left"> 3 no leidos </TableCell>
									<TableCell align="center">Activo</TableCell>
									<TableCell align="left">
										<Typography>View</Typography>
										<Typography>Profile</Typography>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</Box>
		</Nav>
	)
}
