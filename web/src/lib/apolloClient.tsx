import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';


const client = new ApolloClient({
    uri: 'https://fastapi_server/graphql', 
    cache: new InMemoryCache()
});

export default client;