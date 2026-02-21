import React from 'react'
import GFAHero from './GFAHero'
import ChatWidget from '@gfa-eshal/chat-widget'
import '@gfa-eshal/chat-widget/dist/index.css'

const config = {
  orgId: 'org_39jlOeYO1FsfVF3NfeKQGUnvBo2',
  apiBaseUrl: 'https://dev.eshal.ai',
}

const App = () => {
  return (
    <>
      <GFAHero />
      <ChatWidget {...config} />
    </>
  )
}

export default App