import React from "react";
import {Box, CircularProgress} from "@mui/material";

const CircularProgressComponent = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(105,102,102,0.5)'
            }}>
            <CircularProgress
                size={75}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                }}/>
        </Box>
    )
}

export default CircularProgressComponent;
