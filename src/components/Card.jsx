import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  const card = {
    background: 'none',
    boxShadow: 'none',
    padding: '0',
    marginLeft: '50px',
    marginTop: '20px',
    marginRight: '50px',
    maxWidth: 400,
    maxHeight: 400
  };
  return (
    <Card style={card}>
      <CardActionArea>
        <div>
          <h1 className="TitleBook">{props.title}</h1>
        </div>
        <CardMedia component="img" height="340" border="none" image={props.img} alt="BookIMG" />
        <CardContent sx={{ padding: 0 }}>
          <h2 className="DescBooks">ISBN:{props.ISBN}</h2>
          <h2 className="DescBooks2">Quantity:{props.Quantity}</h2>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
