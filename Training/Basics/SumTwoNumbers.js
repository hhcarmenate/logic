import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter the first number: ', (num1) => { 
    rl.question('Enter the second number: ', (num2) => { 
        const number1 = parseFloat(num1)
        const number2 = parseFloat(num2)

        if (isNaN(number1) || isNaN(number2)) {
            console.log('Invalid input. Please enter a number.');
        } else { 
            const result = number1 + number2
            console.log(`The sum of ${num1} and ${num2} is ${result}.`)
        }
    })

    rl.close()
})

