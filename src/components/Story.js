import React from 'react'
import moment from 'moment'

export const Story = ({ story, removeStory }) => {
  return (
    <div>
      <div>
        <a id='story-title' href={story.url}>
          {story.title}
        </a>
        <a
          href='#!'
          onClick={() => removeStory(story.objectID)}
          className='secondary-content'
        >
          <i class='material-icons hide-on-small-only' id='delete-btn'>
            delete
          </i>
        </a>
      </div>
      <p id='story-info'>
        <span>{moment.unix(story.created_at_i).format('MMMM Do, YYYY')}</span>
        <span>Author: {story.author}</span>
        <span># of comments: {story.num_comments}</span>
      </p>
      {/* // <button onClick={() => removeStory(story.objectID)}>Delete</button> */}
    </div>
  )
}
