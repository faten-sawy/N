import '@/styles/globals.css'
import { CookiesProvider } from "react-cookie"
import axios from 'axios'
import {useEffect} from 'react'

export default function App({ Component, pageProps }) {
  /* useEffect(()=>{
    axios.defaults.withCredentials = true;

  },[]) */
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  )
  
}
