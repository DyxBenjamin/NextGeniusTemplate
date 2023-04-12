import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import {useState} from 'react';
import Router from 'next/router'
import AccountCircle from '@mui/icons-material/AccountCircle';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

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
                <BottomNavigationAction label="Discover" icon={<AutoFixHighIcon/>}
                                        onClick={() => Router.push(`/app/about`)}/>
                <BottomNavigationAction label="Account" icon={<AccountCircle/>}
                                        onClick={() => Router.push(`/app/news`)}/>
            </BottomNavigation>
        </Paper>
    )
}
export default Footer;
