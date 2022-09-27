const a = 80;
const b = 60;
const c = 40;

if(a < 0 || b < 0 || c < 0) {
    console.log('Seu triângulo possui um lado negativo, por favor tente novamente.')
  }else if(a + b + c === 180) {
    console.log(true);
  }else {
    console.log(false);
  }