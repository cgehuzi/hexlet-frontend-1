import * as _ from 'lodash';
import { cons } from '@hexlet/pairs';
import makeGame, { stepsCount } from '..';

export default () => {
  const conditions = [];

  for (let i = 1; i <= stepsCount; i += 1) {
    const question = _.random(1, 100);
    const answer = question % 2 === 0 ? 'yes' : 'no';
    const stepCondition = cons(question, answer);
    conditions.push(stepCondition);
  }

  return makeGame('Answer "yes" if the number is even, otherwise answer "no".', conditions);
};
