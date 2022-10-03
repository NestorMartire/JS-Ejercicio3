let numero = prompt ("inserte un número menor a 20");
let numeroint = parseInt(numero);
let total = 1;
let i = 1;
while (i<=numeroint) {
    if (numeroint<=20){
        total = total * i
        i++    
    } else{
        break;
    }
}
console.log(total);