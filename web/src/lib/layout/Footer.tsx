import { Box, Flex, Heading, Link, Spacer, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
                <Heading size='sm'>Based Music Tool</Heading>
            </Box>
            <Spacer />
        </Flex>
    );
};

export default Footer;
