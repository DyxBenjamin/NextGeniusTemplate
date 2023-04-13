import React from 'react';
import {Box, Button, Typography} from "@mui/material";

export default function DocumentsCard() {
	return (
		<Box sx={{ background: 'white', display:'flex', alignItems:'center', justifyContent:'space-between', overflow:'hidden', borderRadius:'4px', border:'1px solid gray', width:'350px' }} >
			<Box sx={{ width: '90px', height: '130px', background: 'lightGray', display:'grid', placeContent:'center'}} >
				pdf
			</Box>
			<Box sx={{marginRight:'3rem'}}  >
				<Typography>
					Documento de prueba
				</Typography>
				<Typography>
					Subido el 12/12/2021
				</Typography>
				<Typography>
					Subido por: Dr. Juan Perez
				</Typography>
				<Box sx={{ display:'flex', justifyContent:'space-between' }} >
					<Button>
						Ver
					</Button>
					<Button>
						Descargar
					</Button>
				</Box>
			</Box>
		</Box>
	);
}
