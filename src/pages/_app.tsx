
import { AppProps } from 'next/app'
import ThemeConfig from '../theme';
import GlobalStyles from '../theme/globalStyles';
import Router from '../routes';
import store from '../redux/Store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
