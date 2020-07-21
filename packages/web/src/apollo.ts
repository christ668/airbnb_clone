import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// ganti cara pemanggilan, harus ada init
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/',
});

export const client = new ApolloClient({
  // init ke  props
  cache: cache,
  link: link,
  
  name: 'react-web-client',
  version: '1.3',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});