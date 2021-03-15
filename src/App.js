import './index.css'
import React, { useRef, useState } from 'react'
import Search from './components/Search'
import StoriesList from './components/StoriesList'
import Loading from './components/Loading'
import Footer from './components/Footer'
import useFetch from './hooks/useFetch'
import { cleanUpStories, sortBy } from './utils/utils'
import { SortFilters } from './components/SortFilters'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

const API_URL = 'https://hn.algolia.com/api/v1/search?hitsPerPage=15&'

function App() {
  const page = useRef(0)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [url, setUrl] = React.useState(
    `${API_URL}page=${page.current}&query=${searchTerm}`
  )
  const [stories, dispatchStories] = useFetch(url, page.current)
  const [sortByValue, setSortByValue] = useState('title')
  const sortFunc = sortBy[sortByValue]

  const cleanedStories = cleanUpStories(stories.data)
  const sortedStories = sortFunc(cleanedStories)

  const handleSearch = term => setSearchTerm(term)
  const handleSearchSubmit = e => {
    e.preventDefault()
    setUrl(`${API_URL}page=${page.current}&query=${searchTerm}`)
  }

  console.log('App rendered')
  console.log(stories)
  console.log(url)
  console.log(searchTerm)
  console.log(page.current)
  console.log(sortByValue)

  const removeStory = id => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: { objectID: id }
    })
  }

  const handleMore = e => {
    page.current++
    handleSearchSubmit(e)
  }

  React.useEffect(() => M.AutoInit(), [])

  return (
    <>
      <div className='container'>
        <h1>Code News</h1>
        <hr />
        <div className='row'>
          <div className='col s12' id='main-div'>
            <Search
              id='searchStories'
              type='text'
              searchTerm={searchTerm}
              handleSearch={handleSearch}
              isFocused
              onSearchSubmit={handleSearchSubmit}
            >
              Search Articles
            </Search>
            <SortFilters sortBy={sortByValue} setSortBy={setSortByValue} />
          </div>
        </div>
        <br />
        {!!stories.isError && <p>Something went wrong: {stories.isError}</p>}
        {stories.isLoading ? (
          <Loading />
        ) : (
          <>
            <ul className='collection'>
              <StoriesList
                list={sortedStories}
                handleRemoveStory={removeStory}
              />
            </ul>
            <a
              href='!#'
              className='btn-floating btn-large waves-effect waves-light teal'
              onClick={handleMore}
              id='more-btn'
            >
              <i class='material-icons more'>expand_more</i>
            </a>{' '}
            <Footer />
          </>
        )}
      </div>
    </>
  )
}

export default App
