import type {AnswerIndicator} from '../types/app_types';
import Circle from './Circle';

type Props = {
  answerIndicator: AnswerIndicator;
};

/**
 * Displays help for the player
 *
 * @param {AnswerIndicator} answerIndicator - The type of answer indicator used in the game
 */
export default function Help({answerIndicator}: Props) {
  return (
    <section className='text-app-text flex flex-col space-y-4 text-sm'>
      <h3 className='text-xl'>Légende :</h3>
      <div className='flex flex-row items-center space-x-4'>
        <Circle size={'SMALL'} color={'INCORRECT'} />
        <h4>Mauvaise couleur</h4>
      </div>
      {answerIndicator === 'FULL' ? (
        <>
          <div className='flex flex-row items-center space-x-4'>
            <Circle size={'SMALL'} color={'PARTIAL'} />
            <h4>Bonne couleur mauvais endroit</h4>
          </div>
          <div className='flex flex-row items-center space-x-4'>
            <Circle size={'SMALL'} color={'CORRECT'} />
            <h4>Bonne couleur bon endroit</h4>
          </div>
        </>
      ) : (
        <div className='flex flex-row items-center space-x-4'>
          <Circle size={'SMALL'} color={'CORRECT'} />
          <h4>Bonne couleur</h4>
        </div>
      )}
    </section>
  );
}
