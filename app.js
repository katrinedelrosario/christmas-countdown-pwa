
//calculates 
function daysUntilChristmas() {
    const today = new Date()
    const christmasDate = new Date(today.getFullYear(), 11, 24) // december is month 11
    const timeDiff = christmasDate - today
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
}

document.getElementById('countdown').textContent = `days until christmas eve: ${daysUntilChristmas()} 🎅🏼`;