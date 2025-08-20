import {createContext, useContext, type ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

// create the game configuration context as undefined first
const GCContext = createContext(undefined);

/**
 * GameConfProvider component to provide game configuration context
 *
 * @param children - children components which can access the context
 */
export default function GameConfProvider({children}: Props) {
  return <GCContext.Provider value={undefined}>{children}</GCContext.Provider>;
}

/**
 * Custom hook to access the game configuration context.
 */
export const useGameConfig = () => {
  const context = useContext(GCContext);
  if (!context) {
    throw new Error('useGameConfig must be used within a GameConfProvider');
  }
  return context;
};
