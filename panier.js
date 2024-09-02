//	1. Ajustez la quantité de chaque article grâce aux boutons « + » et « - ».
// ajustement baskets pour button +
function increment() {
    const countElement = document.getElementById('count');
    let currentCount = parseInt(countElement.textContent);
    currentCount += 1;
    countElement.textContent = currentCount;
}
// ajustement baskets pour button -

function decrement() {
   
    const countElement = document.getElementById('count');
    let currentCount = parseInt(countElement.textContent, 10);
    if (currentCount > 0) {
        currentCount -= 1;
    }
    countElement.textContent = currentCount;
} 
// ajustement socks pour button +
function incremen() {
    
    const countElement = document.getElementById('plus');
    let currentCount = parseInt(countElement.textContent);
    currentCount += 1;
    countElement.textContent = currentCount;
}
// ajustement socks pour button -
function decremen() {
    
    const countElement = document.getElementById('plus');
    let currentCount = parseInt(countElement.textContent, 10);
    if (currentCount > 0) {
        currentCount -= 1;
    }
    countElement.textContent = currentCount;
} 
// ajustement bag pour button +

function incrementer(){
    const countElement = document.getElementById('add')
    let currentCount  = parseInt(countElement.textContent)
    currentCount +=1
    countElement.textContent = currentCount
}

// ajustement bagpour button -
function decrementer() {
    const countElement = document.getElementById('add');
    let currentCount = parseInt(countElement.textContent, 10);
    if (currentCount > 0) {
        currentCount -= 1;
    }
    countElement.textContent = currentCount;
} 

//	3.Aimez les articles grâce à un bouton cliquable en forme de cœur qui changera de couleur en conséquence.
function toggleColor(icon) {
    icon.style.color = icon.style.color === "red" ? "" : "red";
}

/*	2. Supprimer les articles du panier avec delete.png
- for the baskets*/
function toggleImage() {
    const imageElement = document.getElementById('image');
    if (imageElement.src.includes('baskets.png')) {
        imageElement.src = 'delete.png'
    } else {
        imageElement.src = 'baskets.png'
    }
}
//for the socks
function toggleImag() {
    const imageElement = document.getElementById('imag');
    if (imageElement.src.includes('socks.png')) {
        imageElement.src = 'delete.png'
    } else {
        imageElement.src = 'socks.png'
    }
}
//for the bag
function toggleimag() {
    const imageElement = document.getElementById('img');
    if (imageElement.src.includes('bag.png')) {
        imageElement.src = 'delete.png'
    } else {
        imageElement.src = 'bag.png'
    }
}