import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const calculateFactorial = (n) => { 
    if (n === 0 || n === 1) return 1;
    return n * calculateFactorial(n - 1);
}

rl.question('Enter the number to calculate factorial!: ', (num) => { 
        const number = parseInt(num)

    if (isNaN(number) || number < 0) { 
        console.log('Please enter a non-negative integer.');
        rl.close()
        return
    }
    
    const factorial = calculateFactorial(number)
    
    console.log(`Factorial of ${number} is: ${factorial}`);

    rl.close()
})

