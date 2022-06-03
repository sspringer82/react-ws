import { ReactElement } from 'react';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

function NotFound(): ReactElement {
  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>whoops... something went wrong</h1>
      <p>
        <Link to="/">Go to the start page</Link>
      </p>
    </Container>
  );
}

export default NotFound;
