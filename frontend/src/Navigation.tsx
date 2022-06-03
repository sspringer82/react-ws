import { Menu, MenuBook } from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, Badge } from '@mui/material';
import { ReactElement, useContext } from 'react';
import BooksContext from './BooksContext';

function Navigation(): ReactElement {
  const [books] = useContext(BooksContext);
  return (
    <AppBar>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="Menu"
          onClick={() => {}}
        >
          <Menu />
        </IconButton>
        <IconButton edge="end" color="inherit" aria-label="books indicator">
          <Badge badgeContent={books.length} color="secondary">
            <MenuBook />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
