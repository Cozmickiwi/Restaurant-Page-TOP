export function homeBodyContent(){
    const bodyContainer = document.querySelector('.bodyContainer');
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
    bodyContainer.style.backgroundColor = "#c3a1fcf8";
}