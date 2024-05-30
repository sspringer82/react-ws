import { Button, Card, Slider } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Material: React.FC = () => {
  return (
    <Card sx={{ padding: 2 }}>
      <h1>Material UI</h1>
      <Button variant="outlined">Outlined</Button>
      <Slider defaultValue={30} aria-label=" slider" />
      <MenuBookIcon
        style={{
          color: 'lightyellow',
          backgroundColor: 'black',
          height: 200,
          width: 200,
        }}
      />
    </Card>
  );
};

export default Material;
