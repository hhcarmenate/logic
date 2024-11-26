import { truncate } from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const isAVowel = (vowel) => { 
    const vowels = ['a', 'e', 'i', 'o', 'u']

    for (let i = 0; i < vowels.length; i++) { 
        if (vowel === vowels[i]) { 
            return true
        }
    }

    return false
}

rl.question('Enter the string count vowels: ', (chain) => { 
    
    if (!chain.trim()) { 
        console.log('Please enter a valid string')
        rl.close()
        return
    }

    const normalizedChain = chain.replace(/\s+/g, '').toLowerCase()

    let count = 0
    for (let i = 0; i < normalizedChain.length; i++) { 
        if (isAVowel(normalizedChain[i])) { 
            count += 1
        }
    }

    console.log(`The vowel count is ${count}`)
    rl.close()
    return
})