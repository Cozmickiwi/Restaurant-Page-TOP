import './style.css';

console.log('Hello World!!');

function component() {
    const container = document.getElementById('content');
    //header element
    function header(){
        const headerContainer = document.createElement('div');
        const test = document.createElement('p');
        test.textContent = 'test';
        headerContainer.appendChild(test);
        headerContainer.className = 'header';
        return(headerContainer);
    }

    function body(){

    }
    container.appendChild(header());
    return(container)
}
document.body.appendChild(component());