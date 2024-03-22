// creare un elemento;


const list = document.getElementById("squares-list");

// stampare in pagina i numeri da 1 a 100;

let items = "";
for (let i = 1; i <= 100; i++) {

    let content = i;
    if (i % 15 === 0) {
        content = "fizzbuzz";
    } else if (i % 3 === 0) {
        content = "fizz";
    } else if (i % 5 === 0) {
        content = "buzz"
    } else {
        content = `${i}`;
    }

    items += `<li class="${content}">${content}</li>`;
}

list.innerHTML = items;

