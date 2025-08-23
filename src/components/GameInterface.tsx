import type {AnswerIndicator} from '../types/app_types';
import Button from './Button';
import ColorSelector from './ColorSelector';
import Help from './Help';

type Props = {
  answerIndicator: AnswerIndicator;
};

/**
 * Display game interface components
 *
 * @param answerIndicator {AnswerIndicator} - the type of answer indicator for the help
 */
export default function GameInterface({answerIndicator}: Props) {
  return (
    <div className='flex flex-col items-center space-y-6'>
      <ColorSelector />
      <Button onClick={() => {}} text='Valider' />
      <Help answerIndicator={answerIndicator} />
    </div>
  );
}
