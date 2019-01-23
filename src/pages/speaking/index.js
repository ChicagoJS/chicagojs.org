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
        style={{ background: 'transparent', height: '100vh', marginBottom: '0', paddingBottom: '0' }}
      />
    </Layout>
  )
}

export default SpeakingPage
