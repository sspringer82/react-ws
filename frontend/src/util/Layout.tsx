import { Link, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex' }}>
          <li style={{ margin: 5 }}>
            <Link to="/">Liste</Link>
          </li>
          <li style={{ margin: 5 }}>
            <Link to="/new">Neu</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
