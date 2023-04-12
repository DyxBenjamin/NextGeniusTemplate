import {Button} from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

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
                bgcolor: 'gray',
                color: 'white',
                '&:hover': {
                    bgcolor: 'darkGray',
                },
            }}
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
