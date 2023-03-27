import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  const card = {
    background: 'none',
    boxShadow: 'none',
    padding: '0',
    width: '220px',
    maxWidth: 220,
    maxHeight: 400,
    marginLeft: '55px',
    marginRigth: '50px'
  };
  return (
    <Card style={card}>
      <CardActionArea>
        <div>
          <h1 className="TitleBook">{props.title}</h1>
        </div>
        <CardMedia
          component={'img'}
          height="330"
          width="220px"
          border="none"
          image={props.img}
          alt="BookIMG"
        />
      </CardActionArea>
      <CardContent sx={{ padding: 0 }}>
        <h2 className="DescBooks">ISBN:{props.ISBN}</h2>
        <h2 className="DescBooks2">Quantity:1</h2>
      </CardContent>
    </Card>
  );
}
