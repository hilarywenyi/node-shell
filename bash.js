// Output a prompt
const pwd = require('./pwd')
const ls = require('./ls')

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //remove newline  
  //gets what user typed
  if (cmd === 'pwd') {
     pwd()
  }else if ( cmd === 'ls') {
    ls()
  }else{
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});
