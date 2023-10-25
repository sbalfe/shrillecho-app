import { Box, Flex, Heading, Image, ButtonGroup, Button, Spacer, Center, Text, Square } from '@chakra-ui/react';

import ThemeToggle from './ThemeToggle';

const Header = () => {
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
                <Heading size='md'>shrillecho app</Heading>
            </Box>
            <Box>
                <Image
                    src="https://cdn.discordapp.com/emojis/860598160468606976.gif?size=64"
                    alt="Description of the GIF"
                    width={400}
                    height={300}
                    objectFit="cover"
                />
            </Box>
            <Spacer />
        </Flex>
    );
};

export default Header;
