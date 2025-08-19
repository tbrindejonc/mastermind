import React, {useContext, type ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

const GameStateContext = React.createContext({});

export default function GameStateProvider({children}: Props) {
  return <GameStateContext.Provider value={{}}>{children}</GameStateContext.Provider>;
}

export const useGameState = () => {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error('useGameState must be used within a GameStateProvider');
  }
  return context;
};
