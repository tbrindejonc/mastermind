import GameStateProvider from './providers/GameStateProvider';
import ViewSwapper from './views/ViewSwapper';

function App() {
  return (
    <main className='font-main'>
      <GameStateProvider>
        <ViewSwapper />
      </GameStateProvider>
    </main>
  );
}

export default App;
