import React from "react";
import {TableCell, TableRow, Typography} from "@mui/material";
import ClientDefault from "@constants/ClientDefault";
import {useRouter} from "next/router";



export default function ClientRow({client}) {
	const {name, pendingPlans, lastPlan, feedback, status} = {...ClientDefault, ...client};
	const router = useRouter();

	const handleClick = async () => {
		await router.push(`/dashboard/pacientes/${client.id}`)
	}


	return (
		<TableRow >
			<TableCell onClick={handleClick} align="left">{name}</TableCell>
			<TableCell onClick={handleClick} align="center">{pendingPlans}</TableCell>
			<TableCell onClick={handleClick} align="left">{lastPlan}</TableCell>
			<TableCell onClick={handleClick} align="left"> {feedback}</TableCell>
			<TableCell align="center">{status}</TableCell>
			<TableCell align="left">
				<Typography>View</Typography>
				<Typography>Profile</Typography>
			</TableCell>
		</TableRow>
	)
}
