import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question('Enter the string to invert: ', (chain) => { 
    if (!chain.trim()) {
        console.log('The input string is empty or contains only whitespace.');
        rl.close();
        return;
    }
    
    let invertedChain = ''
    
    if (chain.length) { 
        for (let i = chain.length - 1; i >= 0; i--) { 
            invertedChain += chain[i]
        }
    }

    console.log(`Original string is ${chain} and inverted is ${invertedChain}`)
    rl.close()
})

