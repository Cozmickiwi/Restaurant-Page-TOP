import './style.css';
import Logo from './images/_70d0b2df-9d48-4f3c-907d-7bc70a84db74(2).png';
import { aboutBodyContent } from './aboutPage';
import { contactBodyContent } from './contactPage';
import { menuBodyContent } from './menuPage';
import { homeBodyContent } from './homePage';

function component() {
    const container = document.getElementById('content');
    //header element
    function header(){
        const headerContainer = document.createElement('div');
        headerContainer.className = 'header';
        const myLogo = new Image();
        myLogo.src = Logo;
        myLogo.className = 'logo';
        headerContainer.appendChild(myLogo);
        //header page links:
        function pages(){
            const pagesContainer = document.createElement('div');
            pagesContainer.className = 'pagesContainer';
            const homePage = document.createElement('div');
            homePage.className = 'home';
            homePage.id = 1;
            homePage.textContent = 'HOME';
            const menuPage = document.createElement('div');
            menuPage.className = 'menu';
            menuPage.id = 2;
            menuPage.textContent = 'MENU';
            const contactPage = document.createElement('div');
            contactPage.className = 'contact';
            contactPage.id = 3;
            contactPage.textContent = 'CONTACT';
            const aboutPage = document.createElement('div');
            aboutPage.className = 'about';
            aboutPage.id = 4;
            aboutPage.textContent = 'ABOUT US';
            headerContainer.appendChild(pagesContainer);
            headerContainer.appendChild(homePage);
            headerContainer.appendChild(menuPage);
            headerContainer.appendChild(contactPage);
            headerContainer.appendChild(aboutPage);
        }
        pages();
        return(headerContainer);
    }
    container.appendChild(header());
    function body(){
        const bodyContainer = document.createElement('div');
        bodyContainer.className = 'bodyContainer';
        let currentPage = 1;
        setTimeout(() => {
            homeBodyContent();
        }, 1)
        document.querySelector('.header').addEventListener('click', event => {
            transition(event.target.id, currentPage);
        });
        function transition(desPage, curPage){
            if(desPage > curPage){
                bodyContainer.classList.toggle('tranLeftClass');
                setTimeout(() => {
                    bodyContainer.innerHTML = "";
                    if(desPage == 1){
                        homeBodyContent();
                    }
                    else if(desPage == 2){
                        menuBodyContent();
                    }
                    else if(desPage == 3){
                        contactBodyContent();
                    }
                    else if(desPage == 4){
                        aboutBodyContent();
                    }
                    bodyContainer.classList.toggle('tranLeftClass');
                    bodyContainer.classList.toggle('tranLeftClassEnd');
                    setTimeout(() => {
                        bodyContainer.classList.toggle('tranLeftClassEnd');
                        currentPage = desPage;
                    }, 1500)
                }, 750)
            }
            else if(desPage < curPage && desPage > 0){
                bodyContainer.classList.toggle('tranRightClass');
                setTimeout(() => {
                    bodyContainer.innerHTML = "";
                    if(desPage == 1){
                        homeBodyContent();
                    }
                    else if(desPage == 2){
                        menuBodyContent();
                    }
                    else if(desPage == 3){
                        contactBodyContent();
                    }
                    else if(desPage == 4){
                        aboutBodyContent();
                    }
                    bodyContainer.classList.toggle('tranRightClass');
                    bodyContainer.classList.toggle('tranRightClassEnd');
                    setTimeout(() => {
                        bodyContainer.classList.toggle('tranRightClassEnd');
                        currentPage = desPage;
                    }, 1500)
                }, 750)
                
            }
        }
        return(bodyContainer);
    }
    container.appendChild(body());
    return(container)
}
document.body.appendChild(component());