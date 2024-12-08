const promp = require('prompt-sync')({ sigint: true });

const storedInput = promp('Enter Somthing: ');
console.log('You entered: ' + storedInput)