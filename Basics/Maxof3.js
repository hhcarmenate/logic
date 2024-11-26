import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter the number: ', (num) => { 
        const number = parseFloat(num)

    if (isNaN(number)) {
        console.log('Invalid input. Please enter a number.');
        return
    }

    if (number % 2 === 0) { 
        console.log('The number is even.');
        return
    }

    console.log('The number is odd.')
})