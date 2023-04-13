import {Button, Stack, Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ButtonAddProfile = () => {
    return (
        <Button
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
                    bgcolor: '#868589',
                },
            }}>
            {/*<Typography variant="button">Agregar</Typography>*/}
            <Stack direction="column" spacing={1} alignItems="center">
                <AddIcon sx={{width: '30px', height: '30px'}}/>
                <Typography variant="body2">Agregar</Typography>
            </Stack>
        </Button>
    );
};

export default ButtonAddProfile;
