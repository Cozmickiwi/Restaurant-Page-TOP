console.log('Hello World!!');

function component() {
    const container = document.getElementById('content');
    const test = document.createElement('p');
    test.textContent = 'Hey!';
    container.appendChild(test);
    return(container)
}
document.body.appendChild(component());