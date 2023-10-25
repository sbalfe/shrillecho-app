'use client'
import React, { useEffect, useState } from 'react';
import { Box, Button, TabList, Tabs, Tab, TabPanel, TabPanels, CSSReset, Avatar,Badge, Flex, Text, Textarea, ListItem, UnorderedList, OrderedList, FormLabel, FormControl, Switch, Container, Center, Square, GridItem, Grid, Heading, VStack, RangeSliderTrack } from '@chakra-ui/react';
import { ApolloProvider, ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client'
import { Providers } from "~/lib/providers";
import { indexTheme } from "~/lib/theme/index"
import client from '../apolloClient'
import { useTrackQuery } from '../gql/generated';

const TrackComponent: React.FC = () => {
    const { data, error, loading } = useTrackQuery();

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    return <Text>{data?.track?.name}</Text>;
};

export const App: React.FC = () => {

    return (
    
        <ApolloProvider client={client}>
            <Providers theme={indexTheme}>
                    <TrackComponent />
            </Providers>
        </ApolloProvider>
    );
};

