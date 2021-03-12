const storiesReducer = (store, action) => {
  switch (action.type) {
    case 'STORIES_FETCH_INIT':
      return {
        ...store,
        isLoading: true,
        isError: null
      }
    case 'STORIES_FETCHED_SUCCESSFULLY':
      return {
        ...store,
        data:
          action.payload.page === 0
            ? action.payload.data
            : store.data.concat(action.payload.data),
        isLoading: false,
        isError: null,
        page: action.payload.page
      }
    case 'STORIES_FETCHED_WITH_ERROR':
      return {
        ...store,
        isLoading: false,
        isError: action.payload.error
      }
    case 'REMOVE_STORY':
      return {
        ...store,
        data: store.data.filter(
          story => story.objectID !== action.payload.objectID
        )
      }
    default:
      return store
  }
}

export default storiesReducer
