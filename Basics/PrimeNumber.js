import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const askQuestion = (question) => { 
    return new Promise((resolve, reject) => { 
        rl.question(question, (answer) => resolve(parseInt(answer)))
    })
}

(async function main() { 
    try {
        const number = await askQuestion('Please enter the number: ')

        if (isNaN(number) || number < 1) { 
            console.log('Invalid input. Please enter a number.');
            return
        }

        
        if (number <= 1) { 
            console.log(`${number} Is not a prime number`)
            return
        }

        if (number === 2) { 
            console.log(`${number} is a prime number`)
            return
        }

        // Even number greater that 2 are divisible by 2
        if (number > 2 && number % 2 === 0) { 
            console.log(`${number} is not a prime number`)
            return
        }

        const square = Math.sqrt(number) 
        let isPrime = true
        for (let i = 3; i <= square; i += 2) { 
            if (number % i === 0) { 
                console.log(`${number} is not a prime number`)
                return
            }
        }

        console.log(`${number} is a prime number`)

    
    } catch (err) {
        console.log(err)
    } finally { 
        rl.close()
    }
})()