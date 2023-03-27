import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import styled from '@emotion/styled';

export default function ActionAreaCard(props) {
  const StyledCardActionArea = styled(CardActionArea)({
    transition: 'all 0.2s ease-in-out',
    transform: 'scale(1)',
    '&:hover': {
      transform: 'scale(1.15)',
      filter: 'brightness(0.6)'
    }
  });

  const card = {
    background: 'none',
    boxShadow: 'none',
    padding: '0',
    width: '100%',
    height: '100%',
    marginLeft: '50px',
    maxWidth: '65%',
    minwidth: '20%',
    maxHeight: '100%',
    minHeight: '20%',
    marginTop: '5px'
  };
  return (
    <Card style={card}>
      <StyledCardActionArea>
        <div>
          <h1 className="TitleBook">{props.title}</h1>
        </div>
        <CardMedia
          sx={{
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
          component={'img'}
          border="none"
          image={props.img}
          alt="BookIMG"
        />
        <CardContent sx={{ padding: 0 }}>
          <h2 className="DescBooks">ISBN:{props.ISBN}</h2>
          <h2 className="DescBooks2">Quantity:1</h2>
        </CardContent>
      </StyledCardActionArea>
    </Card>
  );
}
