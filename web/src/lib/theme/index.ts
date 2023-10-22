// Theme entry point
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import {styles } from '~/lib/theme/styles/styles' 

// // Foundational style overrides
import {borders} from './foundations/borders'

// // Component style overrides
import {Button} from './components/button'

export const overrideTheme = extendTheme({

    /* Foundational overrides*/
    styles,
    borders,

    /* Component overrides */
    components: {
        Button
    },
})
