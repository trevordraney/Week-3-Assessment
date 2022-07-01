const colorBtn = document.getElementById('color')
const placeBtn = document.getElementById('place')
const ritualBtn = document.getElementById('ritual')

function myFaveColor() {
    alert('My favorite color is Black')
}

function myFavePlace() {
    alert('My favorite place to be is in Italy')
}

function myFaveRitual() {
    alert('My favorite ritual is making dinner and playing games with friends in the evening')
}

colorBtn.addEventListener('click', myFaveColor)
ritualBtn.addEventListener('click', myFaveRitual)
placeBtn.addEventListener('click', myFavePlace)

