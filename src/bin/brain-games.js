#!/usr/bin/env node
import sayWelcome, { getUserName, sayHello } from '..';

sayWelcome();
const userName = getUserName('May I have your name? ');
sayHello(userName);
