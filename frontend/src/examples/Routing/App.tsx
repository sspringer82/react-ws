import { ReactElement } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
  useNavigate,
  Link,
} from 'react-router-dom';

function B(): ReactElement {
  const { c } = useParams<{ c: string }>();
  const navigate = useNavigate();
  return (
    <div>
      <div>This is B with {c}</div>
      <button onClick={() => navigate('/a')}>goto a</button>
    </div>
  );
}

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/a"
          element={
            <div>
              This is A <Link to="/b/CEE">goto b</Link>
            </div>
          }
        />
        <Route path="/b/:c" element={<B />} />
        <Route path="/" element={<Navigate to="/a" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
