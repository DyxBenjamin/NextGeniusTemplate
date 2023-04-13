import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import logo from '../assets/LogoSD.png';
import {Typography} from "@mui/material";

const Navbar = () => {
    return (
        <AppBar position="static" sx={{backgroundColor: '#f2f5f3'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display:'flex', justifyContent:'space-between' }} >
                    <img src={"https://cdn.comunidadsd.org/MX/Salud-Digna/Home/Header/img/LogoSaludDigna.svg"}
                         style={{
                             maxHeight: "100px",
                             maxWidth: "120px",
                             marginRight: "2%",
                             marginLeft: "2%",
                         }}
                         alt="Logo"/>
                    <Typography
                        variant="h6"
                        sx={{
                            mr: 2,
                            flexGrow: 1,
                            color: 'black',
                            textDecoration: 'none',
                        }}>
                        Nutrición
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>)
}
export default Navbar;
