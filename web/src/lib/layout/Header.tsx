import { Box, Flex, Heading, Image, ButtonGroup, Button, Spacer, Center, Text, Square } from '@chakra-ui/react';

import ThemeToggle from './ThemeToggle';

const Header = () => {
    return (
        <Flex
            direction="column"
            justify="center"
            align="center" // Align items vertically to center them
            gap={4}
            backgroundColor="yellow"
        >
            <Box >
                <Heading size='md'>shrillecho app</Heading>
            </Box>
            <Box >
                <Image
                    src="https://cdn.discordapp.com/emojis/860598160468606976.gif?size=64"
                    alt="Description of the GIF"
                    width={10}
                    height={10}
                    objectFit="cover"
                />
            </Box>
            <Spacer backgroundColor={'black'}/>
        </Flex>
    );
};

export default Header;
