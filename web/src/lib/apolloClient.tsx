import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import fast_origin from './env';

const client = new ApolloClient({
    uri: `${fast_origin}/graphql`, 
    cache: new InMemoryCache()
});

export default client;