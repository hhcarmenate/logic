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
        const numb1 = parseFloat(num1)
        const numb2 = parseFloat(num2)
        const numb3 = parseFloat(num3)

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
})


rl.question('Enter the first number: ', (num1) => { 
    rl.question('Enter the second number: ', (num2) => { 
        rl.question('Enter the last number: ', (num3) => { 
            const numb1 = parseFloat(num1)
            const numb2 = parseFloat(num2)
            const numb3 = parseFloat(num3)

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
            rl.close()

        })
    })
})

