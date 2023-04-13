import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import {useState} from 'react';
import Router from 'next/router'
import AccountCircle from '@mui/icons-material/AccountCircle';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import {EmojiFoodBeverage, FoodBank, MenuBook, MenuOpen, Newspaper} from "@mui/icons-material";
import {pageValue, SetPageValue} from "@api/states/allStates";

const Footer = () => {
    const value = pageValue.use();
    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                sx={{backgroundColor: '#008959'}}
                onChange={(event, newValue) => {
                    SetPageValue(newValue);
                }}>
                <BottomNavigationAction
                    sx={{
                        "&.Mui-selected": {
                            color: "white"
                        }
                    }} label="Home" icon={<HomeIcon/>}
                    onClick={() => Router.push(`/app`)}/>
                <BottomNavigationAction
                    sx={{
                        "&.Mui-selected": {
                            color: "white"
                        }
                    }} label="Recipes" icon={<MenuBook/>}
                    onClick={() => Router.push(`/app/recetas`)}/>
                <BottomNavigationAction sx={{
                    "&.Mui-selected": {
                        color: "white"
                    }
                }} label="Profile" icon={<AccountCircle/>}
                                        onClick={() => Router.push(`/app/perfil`)}/>
                <BottomNavigationAction
                    sx={{
                        "&.Mui-selected": {
                            color: "white"
                        }
                    }} label="Articles" icon={<Newspaper/>}
                    onClick={() => Router.push(`/app/articulos`)}/>
            </BottomNavigation>
        </Paper>
    )
}
export default Footer;
