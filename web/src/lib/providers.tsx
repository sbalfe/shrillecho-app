'use client'
import { ChakraProvider, ThemeProvider, CSSReset } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { extendTheme } from "@chakra-ui/react";

export function Providers({
    children,
    theme, // Add a theme prop
}: {
    children: React.ReactNode;
    theme?: any; // Define the type of the theme prop
}) {
  

    return (
        <CacheProvider>
            <ChakraProvider theme={theme}> {/* Pass the custom theme */}
                {children}
            </ChakraProvider>
        </CacheProvider>
    );
}