import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'
import Layout from '../components/Ui/Layout'
import { appWithTranslation } from 'next-i18next'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ApolloProvider client={client}>
      <NextNProgress color="#00B1B7" height={5} />
      {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
  )
}

export default appWithTranslation(MyApp)
