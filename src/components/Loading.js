import React from 'react'
import spinner from './spinner.gif'

const Loading = () => {
  return (
    <div id='loading-page'>
      <img
        src={spinner}
        alt='Loading...'
        style={{ width: '50px', margin: '50px auto', display: 'block' }}
        className='valign-wrapper center-align'
      />
    </div>
  )
}

export default Loading
