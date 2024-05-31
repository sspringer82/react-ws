import { Link } from 'react-router-dom';

const List: React.FC = () => {
  return (
    <ul>
      <li>
        <Link to="/detail/9780451524935">eins</Link>
      </li>
      <li>
        <Link to="/detail/9780743273565">zwei</Link>
      </li>
      <li>
        <Link to="/detail/9780140283334">drei</Link>
      </li>
    </ul>
  );
};

export default List;
