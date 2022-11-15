
const generateRandomNumber = () => Math.round(Math.random() * 10);


const resolvedPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = generateRandomNumber();
            resolve(randomNumber);
        }, 1000);
    });

console.log(resolvedPromise());
