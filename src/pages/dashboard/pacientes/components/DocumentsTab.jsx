import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import DocumentsCard from "@pages/dashboard/pacientes/components/DocumentsCard";

export default function DocumentsTab() {
	return (
		<Box>
			<Typography variant={'h5'} >
				Documentos y estudios
			</Typography>

			<Box sx={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
				gridGap: '1rem',
				marginTop: '1rem',
				justifyItems: 'flex-start',
				alignItems: 'center',
			}} >
				<Button sx={{ background: '#FAFAFA', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', borderRadius:'4px', width:'350px' }} >
					<Typography>
						Subir documento
					</Typography>
				</Button>



				<DocumentsCard/>
				<DocumentsCard/>
				<DocumentsCard/>
				<DocumentsCard/>
				<DocumentsCard/>
			</Box>


		</Box>
	)
}
