import cardstyle from './CharacterCard.css'
import { Link } from 'react-router-dom'
export default function CharacterCard({ id, image, name, species, status, hide }) {
  return (
    <article key={id} className={cardstyle.card}>
      <img alt={`Image of ${name}`} src={image} />
      {/* if hide is falsy then link is truthy */}
      {!hide && 
      <Link to={`/character/${id}`}>
      <h3>{name}</h3>
      </Link>}
      {/* if hide has truthy value name is truthy */}
      {hide && 
      <h3>{name}</h3>}
      <h4>Species: {species}</h4>
      <h5>Status: {status}</h5>
    </article>
  )
}
