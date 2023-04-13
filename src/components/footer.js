import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import {useState} from 'react';
import Router from 'next/router'
import AccountCircle from '@mui/icons-material/AccountCircle';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import {EmojiFoodBeverage, FoodBank, MenuBook, MenuOpen, Newspaper} from "@mui/icons-material";

const Footer = () => {
    const [value, setValue] = useState(0);

    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}>
                <BottomNavigationAction label="Home" icon={<HomeIcon/>}
                                        onClick={() => Router.push(`/app`)}/>
                <BottomNavigationAction label="Recipes" icon={<MenuBook/>}
                                        onClick={() => Router.push(`/app/recetas`)}/>
                <BottomNavigationAction label="Profile" icon={<AccountCircle/>}
                                        onClick={() => Router.push(`/app/perfil`)}/>
                <BottomNavigationAction label="Articles" icon={<Newspaper/>}
                                        onClick={() => Router.push(`/app/articulos`)}/>
            </BottomNavigation>
        </Paper>
    )
}
export default Footer;
