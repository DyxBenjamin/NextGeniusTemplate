import React from "react";
import {Box, Typography} from "@mui/material";

export default function PlanCard() {

	const {name, category, favorite, tags} = {
		name: 'Plan 1',
		category: 'Categoría 1',
		tags:'tag1, tag2, tag3',
		favorite: true,
	}


	return (
		<Box sx={{
			background: '#FAFAFA',
			borderRadius: '10px',
			display: 'flex',
			gap: '10px',
			boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
			overflow: 'hidden',
			cursor: 'pointer',
			'&:hover': {
				boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
				transform: 'scale(0.96)',
				transition: 'all 0.2s ease-in-out'
			}}}>
			<Box sx={{display:'flex', flexDirection:'column', gap:'1rem'}} >
				<Box>
					<Typography>
						{tags}
					</Typography>
				</Box>
				<Typography variant={'h5'} >
					{name}
				</Typography>
				<Typography>
					{category}
				</Typography>
			</Box>

		</Box>
	);
}
