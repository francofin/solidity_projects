import { ThemeProvider } from 'next-themes';
import AppProvider from '@context/AppContext';
import {AuthProvider, DjangoAuthProvider} from '@context/authContext';
import '../index.scss';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider defaultTheme='light'>
      {/* <AuthProvider> */}
      <DjangoAuthProvider>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </DjangoAuthProvider>
      {/* </AuthProvider> */}
    </ThemeProvider>
  )
}

export default MyApp
