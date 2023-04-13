import Head from 'next/head'
import {Typography} from '@mui/material';

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<main>
				<Typography variant={'h2'}>
					<iframe width="300" height="154" src="https://w2.countingdownto.com/4686684"
							frameBorder="0">
					</iframe>
				</Typography>
			</main>
		</>
	);
}
