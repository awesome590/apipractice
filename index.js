//api "https://pokeapi.co/api/v2/pokemon/"


async function main() {
    const mon = await fetch("https://digimon-api.vercel.app/api/digimon")
    const monData = await mon.json()
    const monListEl = document.querySelector('.mon__list')
    monListEl.innerHTML = monData.map((name) =>monHTML(name)).join('')
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

function sortListByName(event, mon, monData, monListEl) {
    mon.sort()
    monListEl.innerHTML = monData.map((name) =>monHTML(name)).join('')
}

function sortListByLevel(event, mon, monData, monListEl) {
    mon.sort((a, b) => a.level - b.level)
    monListEl.innerHTML = monData.map((name) =>monHTML(name)).join('')
}