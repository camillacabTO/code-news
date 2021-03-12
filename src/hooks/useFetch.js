import React from 'react'
import storiesReducer from '../reducers/storiesReducer'
import axios from 'axios'

const useFetch = (url, page) => {
  const [stories, dispatchStories] = React.useReducer(storiesReducer, {
    data: [],
    isLoading: true,
    isError: null,
    page
  })
  const handleFetchStories = React.useCallback(async () => {
    dispatchStories({ type: 'STORIES_FETCH_INIT' })
    try {
      const result = await axios.get(url)
      console.log(result)
      dispatchStories({
        type: 'STORIES_FETCHED_SUCCESSFULLY',
        payload: { data: result.data.hits, page }
      })
    } catch (error) {
      dispatchStories({
        type: 'STORIES_FETCHED_WITH_ERROR',
        payload: { error }
      })
    }
  }, [url, page])
  React.useEffect(() => {
    handleFetchStories()
  }, [handleFetchStories])

  return [stories, dispatchStories]
}

export default useFetch
