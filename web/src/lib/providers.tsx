'use client'
import { ChakraProvider,  CSSReset } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import {ReactNode} from 'react'


interface ProvidersProps {
    children: ReactNode;
    theme?: any; 
}

export function Providers({ children, theme }: ProvidersProps) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        </CacheProvider>
    );
}