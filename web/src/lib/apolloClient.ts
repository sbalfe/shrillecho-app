import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api.shrillecho.app:5000/graphql', // Replace with your Flask GraphQL API endpoint
    cache: new InMemoryCache(),
});

export default client;