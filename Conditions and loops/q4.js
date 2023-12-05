var num1=10;
var num2=25;
let x=0;
for(num1=num1+1; num1<=num2; num1++){
    x=x+num1
    if(num1<num2){
        x=x+","
    }   
}
console.log(x)