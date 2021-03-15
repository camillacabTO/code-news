import React from 'react'
import M from 'materialize-css'

const Search = ({
  id,
  type,
  handleSearch,
  children,
  searchTerm,
  isFocused,
  onSearchSubmit
}) => {
  const inputRef = React.useRef()
  React.useEffect(() => {
    M.AutoInit()
    // if (isFocused && inputRef.current) inputRef.current.focus()
  }, [])

  return (
    <form onSubmit={onSearchSubmit}>
      <div className='input-field col s9 m4'>
        <input
          ref={inputRef}
          type={type}
          value={searchTerm}
          autoComplete='off'
          onChange={e => handleSearch(e.target.value)}
          id={id}
          autoFocus={isFocused}
        />
        <label htmlFor={id}>{children}: </label>
      </div>
      <div className='col s2' id='search-btn-div'>
        <button
          className='btn btn-sm waves-effect waves-light'
          disabled={!searchTerm}
          type='submit'
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default Search
