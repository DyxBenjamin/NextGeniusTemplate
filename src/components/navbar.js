import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Head from "next/head";
import {Typography} from "@mui/material";

const Navbar = () => {
    return (
        <AppBar position="static" sx={{backgroundColor: 'green'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        sx={{
                            mr: 2,
                            flexGrow: 1,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        Salud Digna - Nutrición
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>)
}
export default Navbar;
