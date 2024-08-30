async function main() {
    const mon = await fetch("https://digimon-api.vercel.app/api/digimon");
    const monData = await mon.json();
    let displayData = monData;
    async function processArray(array) {
        for (const item of array) {
            await processItem(item);
    }
    }
    async function processItem(item) {
    // Perform any async operation here
        console.log(item);
    }
    const monListEl = document.querySelector(".mon__list");
    monHTML()
    const searchInput = document.getElementById("searchInput");
    window.sortListByName = function (event) {
        monData.sort((a, b) => a.name.localeCompare(b.name));
        monHTML();
    };
    window.sortListByLevel = function (event) {
        monData.sort((a, b) => a.level.localeCompare(b.level));
        monHTML();
    };
    window.filterResults = function (event) {
        const value = event.target.value;
        displayData = monData.filter((item) => item.name === value);
        processArray(displayData);
        monHTML();
    };
    function monHTML(name) {
        monListEl.innerHTML = displayData
        .map(
        (name) => `<div class="card__wrapper">
            <div class="pokemon-card">
            <h3>${name.name}</h3>
            <figure class="sprite">
            <img src="${name.img}" alt="">
            </figure>
            <p class="level">${name.level}</p>
            </div>
            </div>`
    )
    .join("");
    }
}
main();


