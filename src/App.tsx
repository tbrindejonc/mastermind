import GameConfProvider from './providers/GameConfProvider';
import GameStateProvider from './providers/GameStateProvider';
import ViewSwapper from './views/ViewSwapper';

function App() {
  return (
    <main className='font-main'>
      <GameStateProvider>
        <GameConfProvider>
          <ViewSwapper />
        </GameConfProvider>
      </GameStateProvider>
    </main>
  );
}

export default App;
