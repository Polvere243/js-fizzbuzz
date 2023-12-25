// creare un elemento;

// const square = document.createElement("div");

// stampare in pagina i numeri da 1 a 100;


for(let i = 1; i <= 100; i++){

    let content = i;
    if(i % 15 === 0){
        console.log("FizzBuzz");
    } else if(i % 3 === 0){
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else{
        console.log(content);

    }
    
    
    
}