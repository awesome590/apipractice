//api "https://pokeapi.co/api/v2/pokemon/"


async function main() {
    const mon = await fetch("https://digimon-api.vercel.app/api/digimon")
    const monData = await mon.json()
    const monListEl = document.querySelector('.mon__list')
    monListEl.innerHTML = monData.map((name) =>monHTML(name)).join('')
    
    window.sortListByName = function(event) {
    monData.sort((a, b) => a.name.localeCompare(b.name))
    monListEl.innerHTML = monData.map((name) =>monHTML(name)).join('')
    }
    
    window.sortListByLevel = function(event) {
    monData.sort((a, b) => a.level.localeCompare(b.level))
    monListEl.innerHTML = monData.map((name) =>monHTML(name)).join('')
    }

    /*const searchInput = document.getElementById('searchInput')
    searchInput.addEventListener('keyup', e => {
        const searchString = e.target.value.toLowerCase()
        const filteredMon = monData.filter(name => {
            return (
                name.name.toLowerCase().includes(searchString)
            )
        })
        monListEl.innerHTML = monData.map((filteredMon) =>
            `<div class="card__wrapper">
        <div class="pokemon-card">
            <h3>${filteredMon.name}</h3>
            <figure class="sprite">
                <img src="${filteredMon.img}" alt="">
            </figure>
            <p class="level">${filteredMon.level}</p>
        </div>
    </div>`)
    })*/
}


main()

function monHTML(name) {
    return `<div class="card__wrapper">
        <div class="pokemon-card">
            <h3>${name.name}</h3>
            <figure class="sprite">
                <img src="${name.img}" alt="">
            </figure>
            <p class="level">${name.level}</p>
        </div>
    </div>`
}
