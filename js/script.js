let result = document.querySelector('#result');//variable dans laquelle apparaît le tag span
let fromInput = document.querySelector('#from');//variable dans laquelle apparaît le tag input pour un chiffre minimal
let toInput = document.querySelector('#to');//variable dans laquelle apparaît le tag input pour un chiffre maximal
document.querySelector('button').onclick = function(){//quand on appuie sur button une fonction commence
    let minNumber = parseInt(fromInput.value);//fonction qui pour but transforme les lettres de input en chiffres
    let maxNumber = parseInt(toInput.value);//même chose que ligne 5
    let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);//variable dans laquelle apparaît un nombre aléatoire
    result.innerText = randomNumber;//on met le nombre aléatoire dans span qui montre le résultat
}