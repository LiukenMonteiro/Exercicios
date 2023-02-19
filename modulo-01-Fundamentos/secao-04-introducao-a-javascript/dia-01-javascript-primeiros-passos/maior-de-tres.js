const a = 10;
const b = 20;
const c = 30;

if(a > b && a > c){
    console.log('A maior que B e C');
}else if (b > a && b > c){
    console.log('B maio que A e C');
}else if (c > a && c > b){
    console.log('C maio que A e B');
}else{
    console.log('Os trê númeos possuem o mesmo valor')
}
