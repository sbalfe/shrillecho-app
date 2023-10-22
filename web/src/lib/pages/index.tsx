'use client'
import React from 'react';
import { Button, CSSReset } from '@chakra-ui/react';

import { Providers } from "~/lib/providers";
import { overrideTheme } from "~/lib/theme/index"

export const App: React.FC = () => {
    return (
        <>
            <Providers theme={overrideTheme}>
                <Button>Text in box</Button>
            </Providers>
        </>
    );
};

