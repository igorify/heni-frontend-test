import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { Header } from "../page-content/header";
import { client } from '../utils/apollo-client';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <header>
        <Header pageProps={pageProps} />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  );
};

export default App;
