import React from 'react'
import Artist from '../../components/Artist'

function index() {
  return (
    <div className='flex flex-col space-y-10 items-center justify-center mt-28'>
        <Artist name='steve' shortDescription={true} />
        <Artist name='bob'  />
        <Artist name='jim'  />
        <Artist name='craig'  />
    </div>
  )
}

export default index