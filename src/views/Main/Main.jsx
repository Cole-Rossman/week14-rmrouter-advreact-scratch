import { useEffect, useState } from 'react';
import mainstyle from './Main.css'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import CharacterFilter from '../../components/CharacterFilter/CharacterFilter';
import { useHistory, useLocation } from 'react-router-dom'


export default function Main() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const history = useHistory();
  const location = useLocation();
  const status = new URLSearchParams(location.search).get('status') ?? 'all';

  const handleStatusChange = (event) => {
      history.push(`/?status=${event.target.value}`);
  };

  useEffect(() => {
  try {
    const fetchData = async () => {
      setLoading(true);
      const statusParam = new URLSearchParams(location.search).get('status');
      // if statusParam (dropdown option) is equal to 'all' or(||) if status param is a falsy value('' empty string meaning no status selected) then(?) the first url is run else(:) if status selected(string is filled with status), the second url is run. 
      const url = 
      statusParam === 'all' || !statusParam
      ? 'https://rickandmortyapi.com/api/character'
      : `https://rickandmortyapi.com/api/character?status=${statusParam}`;
      const res = await fetch(url);
      const { results } = await res.json();
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  } catch (e) {
    setError(e.message)
  }
  }, [location.search]);

  return (
    loading ? <h1>Loading...</h1> :
    <div className={mainstyle.main}>
      {error && <p>{error}</p>}
      <h1>Character List</h1>
      <CharacterFilter statusValue={status} onStatusChange={handleStatusChange}/>
      <ul className={mainstyle.characterlist}>
        {characters.map((character) => (
            <CharacterCard key={character.id} {...character} />
        ))}
      </ul>
    </div>
  )
}
