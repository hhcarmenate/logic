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
    
    const normalizedChain = chain.replace(/\s+/g, '').toLocaleLowerCase()

    let invertedChain = ''
    
    for (let i = normalizedChain.length - 1; i >= 0; i--) { 
        invertedChain += normalizedChain[i]
    }

    if (invertedChain === normalizedChain) { 
        console.log(`The input string "${chain}" is a palindrome.`);
    } else {
        console.log(`The input string "${chain}" is not a palindrome.`);
    }

    rl.close()
})