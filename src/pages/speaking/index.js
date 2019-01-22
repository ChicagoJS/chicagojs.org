import React from 'react'
import Layout from '../../components/Layout'

const SpeakingPage = () => {
  return (
    <Layout>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shrAnqAahlNIKmtyN?backgroundColor=orange"
        frameBorder="0"
        onmousewheel=""
        width="100%"
        height="533"
      />
    </Layout>
  )
}

export default SpeakingPage
