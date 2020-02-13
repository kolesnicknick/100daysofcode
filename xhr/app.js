document.getElementById('button1').addEventListener('click', loadData);


document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers(e) {
    // Craete and xhr
    // new XMLHttprequest => open => onload => send;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);

    xhr.onload = function () {
        if(this.status === 200){
            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(customer => {
                output +=`
            <ul>
                <li>${customer.id}</li>
                <li>${customer.name}</li>
                <li>${customer.company}</li>
            </ul>
            `;
            });

            document.getElementById('customer').innerHTML = output;
        }
    };

    xhr.send();
}

function loadData(e) {
    // Craete and xhr
    // new XMLHttprequest => open => onload => send;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customer.json', true);

    xhr.onload = function () {
        if(this.status === 200){
            console.log(this.responseText);

            const customer = JSON.parse(this.responseText);

            const output =`
            <ul>
                <li>${customer.id}</li>
                <li>${customer.name}</li>
                <li>${customer.company}</li>
            </ul>
            `;

            document.getElementById('customer').innerHTML = output;
        }
    };

    xhr.send();
}
