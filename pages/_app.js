import '../styles/globals.css'
import { AppStateProvider } from '../context/AppStateContext'

function MyApp({ Component, pageProps }) {
  return (
    <AppStateProvider>
      <Component {...pageProps} />
    </AppStateProvider>
  )
}

export default MyApp
