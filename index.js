//api "https://pokeapi.co/api/v2/pokemon/"
async function main() {
    const name = await fetch("https://pokeapi.co/api/v2/pokemon/name")
    const nameData = await URLSearchParams.json
}