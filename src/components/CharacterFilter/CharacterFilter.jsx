
export default function CharacterFilter({ statusValue, onStatusChange }) {
  return (
  <div>
    <label htmlFor="status">Character status:</label>
    <select id="status" value={statusValue} onChange={onStatusChange}>
       <option value="all">All</option> 
       <option value="alive">Alive</option>
       <option value="dead">Dead</option>
       <option value="unknown">Unknown</option>
    </select>
    </div>
  )
}
