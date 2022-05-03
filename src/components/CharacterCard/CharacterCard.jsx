import cardstyle from './CharacterCard.css'
import { Link } from 'react-router-dom'
export default function CharacterCard({ id, image, name, species, status }) {
  return (
    <article key={id} className={cardstyle.card}>
      <img alt='characterimg' src={image} />
      <Link to={`/characters/${id}`}>
      <h3>{name}</h3>
      </Link>
      <h4>Species: {species}</h4>
      <h5>Status: {status}</h5>
    </article>
  )
}
