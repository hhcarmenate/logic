import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const askQuestion = (question) => { 
    return new Promise((resolve, reject) => { 
        rl.question(question, (answer) => resolve(parseFloat(answer)))
    })
}

(async function main() { 
    try {
        const n = await askQuestion('Please enter the extension of your fibo example: ')

    if (isNaN(n) || n < 0) { 
        console.log('Please enter a valid positive integer.')
        return
    }

    if (n === 0) {
        console.log('Fibonacci sequence: []');
        return;
    }

    if (n === 1) {
        console.log('Fibonacci sequence: [0]');
        return;
    }    
        

    const fiboSequence = [0, 1]

    for (let i = 2; i < n; i++) { 
        const nextNumber = fiboSequence[i - 1] + fiboSequence[i - 2]
        fiboSequence.push(nextNumber)
    }

    console.log(fiboSequence)
    } catch (err) {
        console.log(err)
    } finally { 
        rl.close()
    }
})()