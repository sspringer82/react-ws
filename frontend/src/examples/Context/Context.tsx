import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type ContextType = [string, Dispatch<SetStateAction<string>>] | null;

const MyContext = createContext<ContextType>(null);

type Props = {
  children: React.ReactNode;
};
const ContextProvider: React.FC<Props> = ({ children }) => {
  const state = useState('Startwert');
  return <MyContext.Provider value={state}>{children}</MyContext.Provider>;
};

function useMyContext(): ContextType {
  const context = useContext(MyContext);

  if (context === null) {
    throw new Error('Du hast vergessen den Provider zu setzen');
  }

  return context;
}

export { ContextProvider, useMyContext };
