import React from 'react';
import {Box, Typography} from "@mui/material";
import RecipeDefault from "@constants/RecipeDefault";
import Image from "next/image";
import recipePlaceholder from "@assets/recipePlaceholder.jpg";

export default function RecipeCard({recipe}) {
	const { name, category, time, difficulty, calories } = {...RecipeDefault, ...recipe};

	return (
		<Box sx={{
			background:'#FAFAFA',
			borderRadius:'10px',
			display:'flex',
			gap:'10px',
			boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
			overflow:'hidden',
			cursor:'pointer',
			'&:hover': {
				boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
				transform:'scale(0.96)',
				transition:'all 0.2s ease-in-out'
				}

		}} >
			<Image height={120} width={130} src={recipePlaceholder} alt={`${name} Recipe photo`}/>
			<Box sx={{ padding:'1rem' }} >
				<Typography variant={'h5'} >
					{name}
				</Typography>
				<Typography>
					{category}
				</Typography>
				<Box sx={{display:'flex', gap:'1rem'}} >
					<Typography>
						{time}
					</Typography>
					<Typography>
						{difficulty}
					</Typography>
					<Typography>
						{calories} Kcal
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}
