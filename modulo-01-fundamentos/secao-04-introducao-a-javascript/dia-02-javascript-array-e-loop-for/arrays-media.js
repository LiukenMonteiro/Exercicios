let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;

for(let index = 0; index < numbers.length; index += 1){
    media += numbers[index] / numbers.length;
}
console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(media));

if(media > 20){
    console.log('valor maior que 20');
}else{
    console.log('Valor menor ou igual a 20');
}

