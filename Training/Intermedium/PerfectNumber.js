import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const isPerfectNumber = (number) => {
    // Perfect numbers are always greater than 1
    if (number <= 1) {
        console.log(`The number ${number} is not perfect.`);
        return;
    }

    let sum = 1; // Start with 1, since 1 is a divisor
    const halfNumber = Math.floor(number / 2);

    for (let i = 2; i <= halfNumber; i++) {
        if (number % i === 0) {
            sum += i; // Add the divisor
        }
    }

    if (sum === number) {
        console.log(`The number ${number} is perfect.`);
    } else {
        console.log(`The number ${number} is not perfect.`);
    }
};


rl.question('Enter your number to check if is perfect: ', (numb) => { 
    const number = parseInt(numb);

    // Validate input
    if (isNaN(number) || number <= 0) {
        console.log('Please enter a positive integer.');
        rl.close();
        return;
    }

    isPerfectNumber(number);
    rl.close();    
})