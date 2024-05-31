import { Add } from '@mui/icons-material';
import { Button, Fab } from '@mui/material';
// import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RouterExample: React.FC = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/');
  //   }, 3000);
  // }, [navigate]);

  return (
    <div>
      <h1>Router Example Works</h1>
      <br />
      <Link to="/">zur Liste</Link>
      <br />
      <Button component={Link} to="/" variant="outlined">
        zur Liste
      </Button>
      <br />

      <Button
        variant="outlined"
        onClick={() => {
          navigate('/');
        }}
      >
        zur Liste mit code
      </Button>

      <Fab
        color="primary"
        aria-label="add"
        component={Link}
        to="/"
        sx={{ position: 'fixed', bottom: 20, right: 20 }}
      >
        <Add />
      </Fab>
    </div>
  );
};

export default RouterExample;
