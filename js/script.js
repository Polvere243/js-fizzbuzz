// creare un elemento;


const list = document.getElementById("squares-list");

// stampare in pagina i numeri da 1 a 100;

let items = "";
for(let i = 1; i <= 100; i++){

    let content = i;
    if(i % 15 === 0){
        content = "FizzBuzz";
    } else if(i % 3 === 0){
        content = "Fizz";
    } else if (i % 5 === 0) {
        content = "Buzz"
    } else{
        content = `${i}`;
    }

   items += `<li>${content}</li>`;
}

list.innerHTML = items;

