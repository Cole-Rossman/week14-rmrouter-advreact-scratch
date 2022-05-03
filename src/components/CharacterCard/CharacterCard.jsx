import cardstyle from './CharacterCard.css'

export default function CharacterCard({ id, image, name, species, status }) {
  return (
    <article key={id} className={cardstyle.card}>
      <img alt='characterimg' src={image} />
      <h3>{name}</h3>
      <h4>Species: {species}</h4>
      <h5>Status: {status}</h5>
    </article>
  )
}
