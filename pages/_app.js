import Head from 'next/head';
import { withApollo } from '../lib/apollo'
import { AuthProvider } from '../context/auth-context';

const Medici = ({ Component, pageProps }) => (
  <div>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </div>
);

export default withApollo({ ssr: true })(Medici);