import {Button} from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import Router from "next/router";

const ButtonWithIcon = () => {
    return (
        <Button
            sx={{
                display: 'block',
                mx: 'auto',
                mb: 2,
                width: '80vw',
                height: 120,
                borderRadius: 5,
                bgcolor: '#868589',
                color: 'white',
                '&:hover': {
                    bgcolor: '#444343',
                },
            }}
            onClick={() => Router.push(`/app/recetas`)}
            startIcon={<LocalDiningIcon
                sx={{
                    width: '75px',
                    height: '75px',
                }}
            />}>
            Crear mi menú del día
        </Button>
    );
};

export default ButtonWithIcon;
