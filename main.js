var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

let select = document.getElementById('planets');

planets.reverse().forEach(function(planet) {
    var insert = document.createElement('option');
    insert.innerHTML = planet[0];
    insert.value = planet[1];
    select.appendChild(insert);
});

function calculateWeight(weight,planetName) {
    for (let i = 0; i < select.length; i++) {
        if (planetName === planets[i][0]) {
            var result = weight * planets[i][1];
            break;
        }
    }
    return result;
}
 
function handleClickEvent(e) {
    var userWeight = document.getElementById('user-weight').value;
    var planetName = select.options[select.selectedIndex].innerHTML;
    var result = calculateWeight(userWeight, planetName);
    document.getElementById('output').innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!';
}

document.getElementById('calculate-button').onclick = function() {
    handleClickEvent()
};