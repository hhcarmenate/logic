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
        const numb1 = await askQuestion('Enter the first number: ')
        const numb2 = await askQuestion('Enter the second number: ')
        const numb3 = await askQuestion('Enter the last number: ')

        if (isNaN(numb1) || isNaN(numb2) || isNaN(numb3)) {
            console.log('Invalid input. Please enter valid numbers.');
            rl.close();
            return;
        }

        let greater = numb1
        let option = 'First'

        if (greater < numb2) {
            greater = numb2
            option = 'Second'
        }

        if (greater < numb3) {
            greater = numb3
            option = 'Third'
        }

        console.log(`The greater number is ${greater} and is the ${option} option`)
    } catch (error) { 
        console.error(error)
    } finally {
        rl.close()
    }
})()
