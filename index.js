const readline = require('readline');

const response = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

response.on('line', function(input) {
  console.log('this is the input', input);
})
