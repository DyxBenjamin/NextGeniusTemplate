import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ButtonAddProfile = () => {
    return (
        <Button
            sx={{
                display: 'block',
                mx: 'auto',
                mb: 2,
                borderRadius: 5,
                bgcolor: 'gray',
                color: 'white',
                '&:hover': {
                    bgcolor: 'darkGray',
                },
            }}
            startIcon={<AddIcon sx={{
                width: '30px',
                height: '30px',
            }}/>}>
        </Button>
    );
};

export default ButtonAddProfile;
