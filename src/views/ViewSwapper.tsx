import {useGameState} from '../providers/GameStateProvider';
import Home from './Home';

/**
 * ViewSwapper component to switch between different game views
 */
export default function ViewSwapper() {
  const {gameState} = useGameState();

  // display adequate view
  switch (gameState) {
    case 'HOME':
      return <Home />;

    case 'CONFIG':
      return <Home />;

    case 'PLAYING':
      return <Home />;

    default:
      return <Home />;
  }
}
