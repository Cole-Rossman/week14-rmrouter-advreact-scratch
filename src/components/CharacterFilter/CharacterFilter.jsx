
export default function CharacterFilter() {
  return (
  <div>
    <label htmlFor="status">Character status:</label>
    <select id="status">
       <option value="all">All</option> 
       <option value="alive">Alive</option>
       <option value="dead">Dead</option>
       <option value="unknown">Unknown</option>
    </select>
    </div>
  )
}
