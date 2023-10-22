export function contactBodyContent(){
    const bodyContainer = document.querySelector('.bodyContainer');
    const h1 = document.createElement('h1');
    h1.className = 'contactHeader';
    const p1 = document.createElement('h3');
    p1.className = 'contactAddress1';
    const p2 = document.createElement('p');
    p2.className = 'contactAddress2';
    const p3 = document.createElement('p');
    p3.className = 'contactAddress3';
    const p4 = document.createElement('p');
    p4.className = 'contactAddress4';
    h1.textContent = "Meow us via Pigeon Mail!";
    p1.textContent = "Address:";
    p2.textContent = "4972 Cheezeburger Lane"
    p3.textContent = "Kitteh City, NY 1337P"
    p4.textContent = "United States of Kittehs";
    bodyContainer.appendChild(h1);
    bodyContainer.appendChild(p1);
    bodyContainer.appendChild(p2);
    bodyContainer.appendChild(p3);
    bodyContainer.appendChild(p4);
    bodyContainer.style.backgroundColor = "#ff6b6cf8";
}