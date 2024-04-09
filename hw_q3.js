
console.log('#'.repeat(77));
console.log('Question 3');
console.log('#'.repeat(77));
// Exercise 3
// Add a Button somewhere on your index.html page with an id "backgroundChanger"
// Add a click event listener to your button that will change the background color of the body
// The background should toggle between at least 2 colors


const pokemonData = [{
    color: '#8BC33E',
    name: 'Chikorita',
    hail: 'Chikorita is a loyal and compassionate partner, known for its healing abilities.'
},{
    color: '#FF9C52',
    name: 'Cyndaquil',
    hail: 'Cyndaquil is a passionate fighter, capable of unleashing powerful flames against foes.'
},{
    color: '#6EC0E4',
    name: 'Totodile',
    hail: 'Totodile is a playful and energetic Pokémon, famous for its powerful jaw strength.'
}];

const button = document.getElementById('backgroundChanger');
let currentIndex = 0;
const hailDisplay = document.getElementById('hailDisplay');

button.addEventListener('click', () => {
    document.body.style.backgroundColor = pokemonData[currentIndex].color;
    hailDisplay.innerHTML = pokemonData[currentIndex].hail;

    currentIndex = (currentIndex + 1) % pokemonData.length;
});



