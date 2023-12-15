const table = document.createElement('table');
const body = document.querySelector('body');
body.appendChild(table);

let numb = 0;
for (let i = 1; i <= 10; i++) {
    const tr = document.createElement('tr');
    table.appendChild(tr);
    for (let j = 1; j <= 10; j++){
        const td = document.createElement('td');
        tr.appendChild(td);
        numb ++;
        td.textContent = numb;
    }
}
