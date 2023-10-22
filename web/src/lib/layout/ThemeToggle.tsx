import { IconButton, useColorMode } from '@chakra-ui/react';


const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            aria-label="theme toggle"
            onClick={toggleColorMode}
        />
    );
};

export default ThemeToggle;
