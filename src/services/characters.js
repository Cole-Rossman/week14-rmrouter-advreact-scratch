export async function fetchCharacters() {
    const resp = await fetch('https://rickandmortyapi.com/api/character?count=20');
    const data = await resp.json();
    return data;
}