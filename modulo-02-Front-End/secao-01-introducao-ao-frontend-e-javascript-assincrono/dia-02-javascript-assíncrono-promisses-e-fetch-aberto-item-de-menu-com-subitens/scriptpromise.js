
const generateRandomNumber = () => Math.round(Math.random() * 10);


const resolvedPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = generateRandomNumber();
            resolve(console.log(randomNumber));
        }, 1000);
    });

    resolvedPromise();

const rejectedPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = generateRandomNumber();
            reject(new Error(`O número ${randomNumber} é inválido.`));
        }, 1000);
    });
    
    // console.log(rejectedPromise());
    rejectedPromise();

    