import fs from 'fs';

const fileContent: string[][] = fs.readFileSync('football.csv',{encoding: "utf-8"})
    .split('\n')
    .map((row:string):string[] => row.split(','));

console.log(fileContent)
let wolvesPoints = 0;

fileContent.forEach(match => {
    if (match[1] === 'Wolves' && match[5] === 'H'){
        console.log('HOME WIN WOLVES')
        wolvesPoints += 3;
        console.log(wolvesPoints);
    }
    else if (match[2] === 'Wolves' && match[5] === 'A'){
        console.log('HOME WIN WOLVES')
        wolvesPoints += 3;
        console.log(wolvesPoints);

    }
    else if ((match[1] === 'Wolves' || match[2] === 'Wolves') && match[5] === 'D'){
        console.log('WOLVES DRAW')
        wolvesPoints += 1;
        console.log(wolvesPoints);
    }
})
