import React from "react";
import {TableCell, TableRow, Typography} from "@mui/material";
import ClientDefault from "@constants/ClientDefault";
import {useRouter} from "next/router";



export default function ClientRow({client}) {
	const {profile, status, plans} = {...ClientDefault, ...client};
	const {name, lastName} = profile;
	const {lastPlan, pendingPlans, feedback} = plans;


	const router = useRouter();

	const handleClick = async () => {
		await router.push(`/dashboard/pacientes/${client.id}`)
	}


	return (
		<TableRow >
			<TableCell onClick={handleClick} sx={{ cursor:'pointer' }} align="left">{`${name} ${lastName} `}</TableCell>
			<TableCell onClick={handleClick} sx={{ cursor:'pointer' }} align="center">{pendingPlans}</TableCell>
			<TableCell onClick={handleClick} sx={{ cursor:'pointer' }} align="left">{lastPlan}</TableCell>
			<TableCell onClick={handleClick} sx={{ cursor:'pointer' }} align="left"> {feedback}</TableCell>
			<TableCell align="center">{status}</TableCell>
			<TableCell align="left">
				<Typography>View</Typography>
				<Typography>Profile</Typography>
			</TableCell>
		</TableRow>
	)
}
