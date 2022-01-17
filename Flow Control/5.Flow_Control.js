function get(){
    return "Morning Sunshine Beautiful";
}
console.log(get());

//with pararmeter
function greet(name){
    return "hello " +name 
}
let name = ("Ripusudan")
console.log(greet(name))

// adiition of two number in function

function myfunction(p1,p2){
    
    return (p1+p2);
    
}
console.log(myfunction(2,3));

//multiplication of two number in function


function add(num1,num2){

    return (num1*num2);
}
console.log(add(100,200));


function iseven(x){

    return x % 2 === 0;
}
console.log(iseven(20));
console.log(iseven(39));


//positive or negative number in function
function absvalue(number){
    if (number < 0){
        return -number;
    }
    return number;
}
console.log((absvalue(-6)));
console.log((absvalue(20)));
