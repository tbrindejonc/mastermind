import {createContext, useContext, type ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

// create the current guess row context as undefined first
const CGRContext = createContext<undefined>(undefined);

/**
 * CurrentGuessRowProvider component to provide current guess row context
 *
 * @param children - children components which can access the context
 */
export default function CurrentGuessRowProvider({children}: Props) {
  return <CGRContext.Provider value={undefined}>{children}</CGRContext.Provider>;
}

/**
 * Custom hook to access the current guess row context.
 */
export const useCurrentGuessRow = () => {
  const context = useContext<undefined>(CGRContext);
  if (!context) {
    throw new Error('useCurrentGuessRow must be used within a CurrentGuessRowProvider');
  }
  return context;
};
