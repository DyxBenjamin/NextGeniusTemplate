import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Button, Stack, Typography} from "@mui/material";
import _ from "lodash";
import React, {Fragment} from 'react';

const ButtonsFamiliars = ({users}) => {
    const mapAllFam = () => {
        const AllButtonsUsers = []
        _.each(users, (valueUser, index) => {
            const userButtons = (
                <Button
                    key={`butFam_${index}`}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        m: '2px',
                        width: 80,
                        height: 90,
                        borderRadius: 5,
                        bgcolor: '#868589',
                        color: 'white',
                        '&:hover': {
                            bgcolor: '#444343',
                        },
                    }}>
                    {/*<Typography variant="button">Agregar</Typography>*/}
                    <Stack direction="column" spacing={1} alignItems="center">
                        <AccountCircleIcon sx={{width: '30px', height: '30px'}}/>
                        <Typography variant="body2">{valueUser.name}</Typography>
                    </Stack>
                </Button>
            )
            AllButtonsUsers.push(userButtons)
        })
        return AllButtonsUsers
    }

    return (
        <Fragment>
            {mapAllFam()}
        </Fragment>
    )
};

export default ButtonsFamiliars;


