//api "https://pokeapi.co/api/v2/pokemon/"


async function main() {
    const mon = await fetch("https://digimon-api.vercel.app/api/digimon")
    const monData = await mon.json()
    const monListEl = document.querySelector('.mon__list')
    const searchInput = document.getElementById('searchInput')
    
    window.sortListByName = function(event) {
        monData.sort((a, b) => a.name.localeCompare(b.name))
        monHTML()
    }
    
    window.sortListByLevel = function(event) {
        monData.sort((a, b) => a.level.localeCompare(b.level))
        monHTML()
    }

    window.filterResults = function(event) {
        monData.filter(filter)
        monHTML
    }

    function filter() {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim()
        })
    }

    function monHTML(name) {
        monListEl.innerHTML = ''
        monListEl.innerHTML = monData.map((name) =>`<div class="card__wrapper">
        <div class="pokemon-card">
            <h3>${name.name}</h3>
            <figure class="sprite">
                <img src="${name.img}" alt="">
            </figure>
            <p class="level">${name.level}</p>
        </div>
    </div>`).join('')
    }
}


main()


