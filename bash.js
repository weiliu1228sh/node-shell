const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');



process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    const cmdPart1 =cmd.split(" ")[0];
    const fileName = cmd.split(" ")[1];


    if (cmdPart1 === 'pwd') {
        pwd();
    } else if (cmdPart1 === 'ls') {
        ls();
    } else if (cmdPart1 === 'cat') {
        cat(fileName);
    }else {
        process.stdout.write('You typed: '+ cmd);
        process.stdout.write('\nprompt > ')
    }
   
    //we can use setTimeout(console.log(process.stdout.write('\nprompt > '))) to wait for if-else statment finishing
})