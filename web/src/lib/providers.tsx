'use client'
import { ChakraProvider,  CSSReset } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import {ReactNode} from 'react'
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";


interface ProvidersProps {
    children: ReactNode;
    theme?: any; 
}

export function Providers({ children, theme }: ProvidersProps) {
    return (
        <ApolloProvider client={client}>
            <CacheProvider>
                <ChakraProvider theme={theme}>
                    {children}
                </ChakraProvider>
            </CacheProvider>
        </ApolloProvider>
    );
}