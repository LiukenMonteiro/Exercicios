const generateRandomNumber = () => Math.round(Math.random() * 10);

const resolvedPromise = () => 
new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = generateRandomNumber();
        resolve(randomNumber);
    }, 1000);
});

const rejectedPromise = () => 
new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = generateRandomNumber();
        reject(new Error(`O número ${randomNumber} não é válido`));
    }, 1000);
});

const randomPromise = () => 
    new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = generateRandomNumber();
        if(randomNumber % 2 === 0){
            resolve(randomNumber)
        } else {
            reject( new Error (`O número ${randomNumber} não é válido. somente números pares são válidos.`));
        }
    }, 3000)
});
 
// resolvedPromise()
//     .then((response) => {
//       console.log(`resolvedPromise: O número gerado é ${response}`);
//     })
//     .finally(() => console.log('Fim da execução da primeira promise.'));

// rejectedPromise()
//     .then((response) => {
//       console.log(`rejectedPromise: O número gerado é ${response}`);
//     })
//     .catch((error) => {
//         console.log(`RejectedPromise: ${error.message}`);
//     })
//     .finally(() => console.log('Fim da execução da segunda promise.'));
    

randomPromise()
    .then((response) => {
        console.log(`Promise resolvida. O número gerado é ${response}`);
    })
    .catch((error) => {
        console.log(`Promise rejeitada: ${error}`);
    })
    .finally(() => console.log(`Fim da execução.`));

    console.log("Hello World não assíncrono.");