import React from 'react'
import Artist from '../../components/Artist'
import Layout from '../../components/Layout'
import { LayoutGroup, motion } from "framer-motion";



function index() {
  return (
    <Layout>
    <div className='flex bg-zinc-900 flex-col space-y-10 items-center justify-center pt-12 pb-12'>
      <LayoutGroup
      layout="position"
      spring={{ type: "spring", stiffness: 500, damping: 30 }}
      staggerChildren={0.2} 
       >
        <Artist layoutId='1' name='steve' shortDescription={true} initialDelay='.3' />
        <Artist layoutId='2' name='bob' initialDelay='.6'  />
        <Artist layoutId='3'name='jim' initialDelay='.9'  />
        <Artist layoutId='4' name='craig' initialDelay='3.2' />
        </LayoutGroup>
    </div>
    </Layout>
  )
}

export default index