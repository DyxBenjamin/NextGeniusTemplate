import React from 'react';
import {Box, Typography} from "@mui/material";

const styles= {
	tab: {
		height:'50px', background:'white', width:'100%', borderRadius:'5px', display:'flex', alignItems:'center', padding:'0 1rem', boxSizing:'border-box', cursor:'pointer'
	}
}

export default function Nav({children, onClick, active}) {
	return (
		<Box sx={{ width:'250px', height:'100%', padding:'0 2rem', borderRight:'2px solid #333333' }} >
			<Box sx={{ height:'100px', display:'grid', placeContent:'center' }} >
				<Typography variant={'h5'} >
					Salud Digna
				</Typography>
			</Box>
			<Box sx={{ display:'flex', flexDirection:'column', gap:'2rem',  }} >
				<Box sx={{ ...styles.tab, background:'#79ee94' }} >
					<Typography variant={'body1'} >
						Planes
					</Typography>
				</Box>
				<Box sx={{  ...styles.tab, }} >
					<Typography variant={'body1'} >
						Pacientes
					</Typography>
				</Box>
				<Box sx={{ ...styles.tab, }} >
					<Typography variant={'body1'} >
						Recetas
					</Typography>
				</Box>
				<Box sx={{ ...styles.tab, }} >
					<Typography variant={'body1'} >
						Contenido
					</Typography>
				</Box>
				<Box sx={{  ...styles.tab, }} >
					<Typography variant={'body1'} >
						Cuenta
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}
