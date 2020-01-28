#!/usr/bin/env node
import startGame, {
  showGameRules, getUserName, sayHello, makeGame,
} from '..';
import gameEven from '../games/even';

startGame();
const userName = getUserName();
sayHello(userName);

showGameRules('Answer "yes" if the number is even, otherwise answer "no".');
makeGame(gameEven, userName);
