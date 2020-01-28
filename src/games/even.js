import * as _ from 'lodash';
import { requestAnswer } from '..';

const gameEven = () => {
  const number = _.random(100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  const userAnswer = requestAnswer(number);

  if (correctAnswer !== userAnswer) {
    return [userAnswer, correctAnswer];
  }

  return true;
};

export default gameEven;