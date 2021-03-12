import _ from 'lodash'
export const cleanUpStories = storiesData =>
  storiesData
    .filter(story => story.title)
    .sort((storyA, storyB) => {
      let a = storyA.title.toLowerCase()
      let b = storyB.title.toLowerCase()
      return a < b ? -1 : a > b ? 1 : 0
    })

export const sortBy = {
  title: stories => _.sortBy(stories, 'title'),
  createdAt: stories => _.sortBy(stories, 'created_at_i').reverse(),
  relevancy: stories => _.sortBy(stories, 'relevancy_score').reverse(),
  comments: stories => _.sortBy(stories, 'num_comments').reverse()
}
