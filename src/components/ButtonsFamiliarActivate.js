import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Button, Stack, Typography} from "@mui/material";
import _ from "lodash";
import React, {Fragment} from 'react';

const ButtonsFamiliarActivate = ({users, activeButtons, onButtonClick}) => {
    const mapAllFam = () => {
        return _.map(users, (valueUser, index) => {
            return (
                <Button
                    key={`butFam_${index}`}
                    onClick={() => onButtonClick(index)}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                        width: 80,
                        height: 90,
                        borderRadius: 5,
                        bgcolor: activeButtons[index] ? '#008959' : '#868589',
                        color: 'white',
                        '&:hover': {
                            bgcolor: activeButtons[index] ? '#015d3d' : '#444343',
                        },
                    }}>
                    <Stack direction="column" spacing={1} alignItems="center">
                        <AccountCircleIcon sx={{width: '30px', height: '30px'}}/>
                        <Typography variant="body2">{valueUser.name}</Typography>
                    </Stack>
                </Button>
            );
        });
    };

    return (
        <Fragment>
            {mapAllFam()}
        </Fragment>
    );
};

export default ButtonsFamiliarActivate;
