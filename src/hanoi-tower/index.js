import readline from 'readline';
import solveTower from './tower';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printGreeting() {
  console.log();
  console.log();
  console.log('Welcome to the Tower of Hanoi!');
  console.log();
  console.log();
  console.log(`
    The tower has 3 rods.
    The goal is to put all the disks from the first rod to the last rod.
    Each disk must can only be placed on top of a bigger disk or on a empty rod.
  `);
  console.log();
  console.log();
}

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

printGreeting();

askQuestion('How many levels should the tower have? (Default 4)').then((levels) => {
  askQuestion('What should be the text output speed? (Default 2000 ms) ').then((printSpeed) => {
    solveTower(levels || 4, printSpeed || 2000);
  });
});
