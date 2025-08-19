import {useGameState} from '../providers/GameStateProvider';
import Config from './Config';
import Game from './Game';
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
      return <Config />;

    case 'PLAYING':
      return <Game />;

    default:
      return <Home />;
  }
}
