import React from 'react'
import Artist from '../../components/Artist'
import Layout from '../../components/Layout'

function index() {
  return (
    <Layout>
    <div className='flex bg-zinc-900 flex-col space-y-10 items-center justify-center pt-28'>
        <Artist name='steve' shortDescription={true} />
        <Artist name='bob'  />
        <Artist name='jim'  />
        <Artist name='craig'  />
    </div>
    </Layout>
  )
}

export default index