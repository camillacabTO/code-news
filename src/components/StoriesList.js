import React from 'react'
import { Story } from './Story'
import M from 'materialize-css'

const StoriesList = ({ list, handleRemoveStory }) => {
  React.useEffect(() => {
    M.AutoInit()
  }, [])
  return list.map(item => (
    <li className='collection-item' key={item.objectID}>
      <Story story={item} removeStory={handleRemoveStory} />
    </li>
  ))
}

export default StoriesList
