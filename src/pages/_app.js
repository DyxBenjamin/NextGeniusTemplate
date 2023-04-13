import '@styles/main.scss'
import Layout from "@components/layout";
import {ThemeProvider} from "@mui/material";

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#12A76C',
		},
		secondary: {
			main: '#337ab7',
		},
	},
});

export default function App({Component, pageProps, router}) {
	if (router.pathname.startsWith('/app')) {
		return (
			<Layout>
				<ThemeProvider theme={theme}>
					<title>Nutricion SD</title>
					<Component {...pageProps} />
				</ThemeProvider>
			</Layout>
		);
	}
	return <Component {...pageProps} />;
}
