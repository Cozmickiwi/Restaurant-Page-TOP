export function menuBodyContent(){
    const bodyContainer = document.querySelector('.bodyContainer');
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
    bodyContainer.style.backgroundColor = '#ffd0acf8';
}