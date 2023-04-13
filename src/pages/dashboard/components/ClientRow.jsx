import React from "react";
import {TableCell, TableRow, Typography} from "@mui/material";
import ClientDefault from "@constants/ClientDefault";



export default function ClientRow({client}) {
	const {name, pendingPlans, lastPlan, feedback, status} = {...ClientDefault, ...client};
	return (
		<TableRow>
			<TableCell align="left">{name}</TableCell>
			<TableCell align="center">{pendingPlans}</TableCell>
			<TableCell align="left">{lastPlan}</TableCell>
			<TableCell align="left"> {feedback}</TableCell>
			<TableCell align="center">{status}</TableCell>
			<TableCell align="left">
				<Typography>View</Typography>
				<Typography>Profile</Typography>
			</TableCell>
		</TableRow>
	)
}
