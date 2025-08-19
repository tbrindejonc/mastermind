import Button from '../components/Button';
import Circle from '../components/Circle';
import {home_circle} from '../data/home_circles';
import type {HomeCircle} from '../types/app_types';

export default function Home() {
  return (
    <section className='bg-app-bg flex h-screen w-full flex-col items-center justify-center space-y-[6vh]'>
      <h1 className='text-app-cta text-shadow-app-main text-7xl font-bold text-shadow-md'>MASTERMIND</h1>
      <Button text='Jouer' />
      <div>
        {home_circle.map((circle: HomeCircle, index: number) => (
          <Circle key={index} color={circle.color} position={circle.position} absolutePosition />
        ))}
      </div>
    </section>
  );
}
