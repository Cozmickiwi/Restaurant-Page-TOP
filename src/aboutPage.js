export function aboutBodyContent(){
    const bodyContainer = document.querySelector('.bodyContainer');
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
    bodyContainer.style.backgroundColor = "#6279fcf8";
}