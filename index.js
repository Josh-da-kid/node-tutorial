const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const responses = {
    Rock : [
        "You failed!! computer chose paper",
         "You won!! computer chose scissors",
          "It's a tie"
        ],
    Paper: [
        "You won!! computer chose rock",
         "You failed!! computer chose scissors",
          "Its a tie"
        ],
    Scissors: [
        "You won!! computer chose paper",
         "A tie!!"
        ]
       }

rl.question("let's play....Rock, Paper or scissors? ", (name) => {
    const feedback = responses[Math.floor(Math.random() * responses.length)];
  console.log(feedback);
  rl.close();
});
