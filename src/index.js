import './style.css';
import Logo from './images/_70d0b2df-9d48-4f3c-907d-7bc70a84db74(2).png';

console.log('Hello World!!');

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
        function bodyHeading(){

        }
        function homeBodyContent(){
            const p1 = document.createElement('p');
            p1.className = 'p1';
            const p2 = document.createElement('p');
            p2.className = 'p3';
            const p3 = document.createElement('p');
            p3.className = 'p3';
            const p4 = document.createElement('p');
            p4.className = 'p4';
            const p5 = document.createElement('p');
            p5.className = 'p5';
            const p6 = document.createElement('p');
            p6.className = 'p6';
            p1.textContent = "Meow, hooman! Yoo've stumbled upon teh meowvelous land of PurrfectPizza, where we serve up teh most pawsitively purrfect cat-themed pizzas in teh whole wide world! 😸🍕";
            p2.textContent = "At PurrfectPizza, we take nomtastic to a whole new level. Our kitteh-inspired menu is packed with claw-some flavors that will make your taste buds do teh happy dance. From the purrfectly cheesy 'Meowgarita' to the fur-tastic 'Paw-ppurroni' pizza, we've got nomz for every cat lover out there.";
            p3.textContent = "Teh ambiance here is as cozy as a cardboard box in a sunbeam. Our restaurant is decked out with charming cat decor, comfy cushions, and cozy corners where you can enjoy your nomz in peace. Plus, we've got live kitty cams, so you can watch adorable kittens as you nom away!"
            p4.textContent = "But wait, there's more! Our mew-sical playlist is a cat-tastic mix of soothing purrs and lively tunes, creating a paw-some atmosphere. And our staff? They're as friendly as a purring kitten on your lap!"
            p5.textContent = "So, whether you're a cat aficionado or just a fan of delicious pizza, PurrfectPizza is the purr-fect spot for you! Come on over, bring your hooman pals, and let's make some purr-ecious memories together. We promise, you won't leave without a full tummy and a heart filled with feline joy. 😺🎉"
            p6.textContent = "Don't let your taste buds miss out on this paw-some experience. Come on in, make yourself comfy, and let's nom together at PurrfectPizza. Meowgical moments await you! 🍕😻"
            bodyContainer.appendChild(p1);
            bodyContainer.appendChild(p2);
            bodyContainer.appendChild(p3);
            bodyContainer.appendChild(p4);
            bodyContainer.appendChild(p5);
            bodyContainer.appendChild(p6);
            bodyContainer.style.backgroundColor = "#c3a1ffbb";
        }
        function menuBodyContent(){
            const h1 = document.createElement('h2');
            h1.className = 'menuItemH';
            const p1 = document.createElement('p');
            p1.className = 'menuItem';
            const h2 = document.createElement('h2');
            h2.className = 'menuItemH';
            const p2 = document.createElement('p');
            p2.className = 'menuItem';
            const h3 = document.createElement('h2');
            h3.className = 'menuItemH';
            const p3 = document.createElement('p');
            p3.className = 'menuItem';
            const h4 = document.createElement('h2');
            h4.className = 'menuItemH';
            const p4 = document.createElement('p');
            p4.className = 'menuItem';
            h1.textContent = "$10.99 | Meowgarita Pizza";
            p1.textContent = "A classy nom with a kitteh twist! Our Meowgarita Pizza is all about tomato sauce, mozzarella, and basil leaves. It's da classic for dem hoomans who can haz good taste.";
            h2.textContent = "$12.99 | Paw-ppurroni Pizza";
            p2.textContent = "For da pepperoni fanatics! Paw-ppurroni Pizza comes with loads of pepperoni slices, mozzarella cheese, and a sprinkle of spicy kitteh love. It's hot n' ready to nom!";
            h3.textContent = "$11.99 | Purressa Pizza";
            p3.textContent = "A kitteh special! Our Purressa Pizza serves up Alfredo sauce, tender chicken, spinach, and mozzarella cheese. It's a twist on the traditional pizza, purrfection on a plate."
            h4.textContent = "$100.99 | Catnip Supreme Pizza";
            p4.textContent = "An adventure for all your senses! Catnip Supreme Pizza is stacked with pepperoni, bell peppers, black olives, onions, mushrooms, mountains of mozzarella cheese, and enough catnip to make your taste buds (and brain) do a flip! (3 heaped cupz). It's a purrfectly wild ride!"
            bodyContainer.appendChild(h1);
            bodyContainer.appendChild(p1);
            bodyContainer.appendChild(h2);
            bodyContainer.appendChild(p2);
            bodyContainer.appendChild(h3);
            bodyContainer.appendChild(p3);
            bodyContainer.appendChild(h4);
            bodyContainer.appendChild(p4);
            bodyContainer.style.backgroundColor = '#ffd0a1bb';
        }
        function contactBodyContent(){
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
            bodyContainer.style.backgroundColor = "#ffa1d0bb";
        }
        function aboutBodyContent(){
            const p1 = document.createElement('h3');
            p1.className = 'aboutH';
            const p2 = document.createElement('p');
            p2.className = 'aboutP';
            const p3 = document.createElement('p');
            p3.className = 'aboutP';
            const p4 = document.createElement('p');
            p4.className = 'aboutP';
            const p5 = document.createElement('p');
            p5.className = 'aboutP';
            const p6 = document.createElement('p');
            p6.className = 'aboutP';
            p1.textContent = "PurrfectPizza - Where Kittehs and Pizza Make Sweet Harmony!";
            p2.textContent = "Once upon a time in a cozy corner of the world, a bunch of kitteh-loving pals came together, bonded by their shared love for kittehs and nommy pizza. An epic tale of PurrfectPizza was about to begin!";
            p3.textContent = `It all started when a friendly feline named Whiskers waltzed into our lives. Whiskers was like, "I'm the boss here!" and quickly became the unofficial mascot of our place. The whole joint soon got a hefty dose of cat-titude, turning into a cat-themed wonderland.`;
            p4.textContent = "Now, PurrfectPizza ain't just a restaurant; it's a meow-munity where cat lovers and foodies unite for a pawsitively epic time. Our mission is to serve up the tastiest cat-inspired pizzas, provide a purr-fectly cozy hangout, and give you a chance to spy on live kitty shenanigans through our kitty cams."
            p5.textContent = "Our team is made up of friendly folks who adore kittehs, and we're here to make your visit super memorable. Whether you're seeking a chill spot after a wild day or celebrating something special, PurrfectPizza is ready to welcome you with open paws."
            p6.textContent = "So, thank you for choosing PurrfectPizza, where kittehs and pizza are more than just noms - they're pure happiness. Come join us, and let's nom and purr together. See you soon! 😻🍕"
            bodyContainer.appendChild(p1);
            bodyContainer.appendChild(p2);
            bodyContainer.appendChild(p3);
            bodyContainer.appendChild(p4);
            bodyContainer.appendChild(p5);
            bodyContainer.appendChild(p6);
            bodyContainer.style.backgroundColor = "#6279fca0";
        }
        let currentPage = 1;
        homeBodyContent();
        document.querySelector('.header').addEventListener('click', event => {
            console.log(event.target.id);
            transition(event.target.id, currentPage);
        })
        function transition(desPage, curPage){
            //bodyContainer.classList.toggle('tranLeftClass');
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
                }, 1000)
                
            }
            else if(desPage < curPage){
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
                }, 1000)
                
            }
            
        }
        
        return(bodyContainer);
    }
    container.appendChild(body());
    return(container)
}
document.body.appendChild(component());