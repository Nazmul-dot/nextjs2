import Layout from '../src/Components/layout/Layout'
import '../styles/globals.css'
import Link from 'next/Link'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )




}

export default MyApp
