const wakeUp = () => 'Acordando!!';

const btc = () => 'Bora tomar café!!';

const pd = () => 'Partiu dormir!!';

const doingThings = (callback) => {
    const result = callback();
    console.log(result);
};

doingThings(wakeUp);
doingThings(btc);
doingThings(pd);