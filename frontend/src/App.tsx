import './App.css';
import List from './List';
import { ContextProvider } from './examples/Context/Context';
import Parent from './examples/Context/Parent';

// function App() {
// const App: React.FC = function () {
// function App(): React.ReactNode {
const App: React.FC = () => {
  return (
    <ContextProvider>
      <Parent />
    </ContextProvider>
  );
};

export default App;
