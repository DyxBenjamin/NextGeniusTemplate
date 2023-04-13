import React, {useEffect, useState} from 'react';
import {Box, Typography} from "@mui/material";
import {useRouter} from "next/router";
import Link from "next/link";
import _ from 'lodash';
import usePersistentState from "@hooks/usePersistentState";

const styles= {
	tab: {
		height:'50px', background:'white', width:'100%', borderRadius:'5px', display:'flex', alignItems:'center', padding:'0 1rem', boxSizing:'border-box', cursor:'pointer'
	}
}

const Routes = [
	{
		name: 'Planes',
		path: '/dashboard/planes',
		icon: <></>,
	},
	{
		name: 'Pacientes',
		path: '/dashboard/pacientes',
		icon: <></>,
	},
	{
		name: 'Recetas',
		path: '/dashboard/recetas',
		icon: <></>,
	},
	{
		name: 'Citas',
		path: '/dashboard/citas',
		icon: <></>,
	},
	{
		name: 'Publicaciones',
		path: '/dashboard/publicaciones',
		icon: <></>,
	}
]



export default function Nav({children}) {
	const router = useRouter();

	function isActiveRoute(route) {
		return route === router.pathname;
	}

	return (
		<main style={{width: '100vw', height:'100vh', display:'flex', flexDirection:'row'}} >
			<Box sx={{ width:'250px', height:'100%', padding:'0 2rem', borderRight:'2px solid #333333' }} >
				<Box sx={{ height:'100px', display:'grid', placeContent:'center' }} >
					<Link href={'/dashboard'} style={{textDecoration:'none'}} >
						<Typography variant={'h5'} >
							Salud Digna
						</Typography>
					</Link>
				</Box>
				<Box sx={{ display:'flex', flexDirection:'column', gap:'2rem',  }} >
					{
						_.map(Routes, (route, index) => {
							return(
								<Link href={route.path} key={index} style={{textDecoration:'none', fontWeight:'bold'}}  >
									<Box sx={{ ...styles.tab, background: isActiveRoute(route.path) ? '#79ee94' : 'white', color: isActiveRoute(route.path) ? 'white' : '#2e733e' }} >
										{route.icon}
										<Typography variant={'body1'}>
											{route.name}
										</Typography>
									</Box>
								</Link>
							)
						})
					}
				</Box>
			</Box>
			<Box sx={{ width: '100%', height:'100%', display:'flex' }} >
				{children}
			</Box>
		</main>
	)
}
