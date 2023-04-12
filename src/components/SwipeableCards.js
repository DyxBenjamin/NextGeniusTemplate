import { Card, CardMedia, Typography } from '@mui/material';
const SwipeableCards = ({ img, title }) => {
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia
                component="img"
                height="140"
                image={img}
                alt={title}
            />
            <Typography variant="h5">{title}</Typography>
        </Card>
    );
};

export default SwipeableCards;
