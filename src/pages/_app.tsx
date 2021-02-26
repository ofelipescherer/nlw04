import { ChallangeProvider } from '../contexts/ChallangesContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return(
    <ChallangeProvider>
        <Component {...pageProps} />
    </ChallangeProvider>
  )

}

export default MyApp
