import { useEffect, useState } from 'react';
import mainstyle from './Main.css'
import { fetchCharacters } from '../../services/characters';
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import CharacterFilter from '../../components/CharacterFilter/CharacterFilter';
import { Link, useHistory, useLocation } from 'react-router-dom'

export default function Main() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const history = useHistory();
  const location = useLocation();
  const characterStatus = new URLSearchParams(location.search).get('status') ?? 'all';

  const handleStatusChange = (event) => {
      history.push(`/?status=${event.target.value}`);
  };

  useEffect(() => {
  try {
    const fetchData = async () => {
      setLoading(true);
      const characterData = await fetchCharacters();
      console.log(characterData);
      setCharacters(characterData.results);
      setLoading(false);
    }
    fetchData();
  } catch (e) {
    setError(e.message)
  }
  }, []);

  return (
    loading ? <h1>Loading...</h1> :
    <div className={mainstyle.main}>
      {error && <p>{error}</p>}
      <h1>Character List</h1>
      <CharacterFilter />
      <ul className={mainstyle.characterlist}>
        {characters.map((character) => (
            <CharacterCard key={character.id} {...character} />
        ))}
      </ul>
    </div>
  )
}
