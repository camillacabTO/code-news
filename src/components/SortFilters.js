import React from 'react'
import M from 'materialize-css'

export const SortFilters = ({ sortBy, setSortBy }) => {
  React.useEffect(() => {
    M.AutoInit()
  }, [])
  return (
    <div className='col offset-m1 s12 m4'>
      <label>Sort by: </label>
      <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
        <option value='title'>TITLE</option>
        <option value='createdAt'>DATE</option>
        <option value='relevancy'>RELEVANCY</option>
        <option value='comments'># OF COMMENTS</option>
      </select>
    </div>
  )
}
