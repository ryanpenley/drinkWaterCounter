const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remaining = document.getElementById('remaining')


updateBigCup()

smallCups.forEach((cup, i) => {
    cup.addEventListener('click', () => highlightCups(i))
})

function highlightCups(i) {
    if(smallCups[i].classList.contains('full') && 
    !smallCups[i].nextElementSibling.classList.contains('full')) {
        i--
    }


    smallCups.forEach((cup, i2) => {
        if(i2  <= i) {
            cup.classList.add('full')
        }else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length

    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remaining.style.visibility = 'hidden'
        remaining.style.height = 0
    } else{
        remaining.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}