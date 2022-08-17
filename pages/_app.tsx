import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { Header } from "../page-content/header";

const App = ({ Component, pageProps }: AppProps) => {
  const cache = pageProps.cache
    ? new InMemoryCache().restore(pageProps.cache)
    : new InMemoryCache();

  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql",
    cache,
  });

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
