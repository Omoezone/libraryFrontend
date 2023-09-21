import { Box, Button } from '@chakra-ui/react';
import { CheckIcon, SmallAddIcon } from '@chakra-ui/icons'
import { GiFeather } from 'react-icons/gi';

function Author() {
    return (

        <Box>
            <Box display={'flex'}>
                <GiFeather />
                <h3>Author</h3>
            </Box>

            <Box>
                <Button>Author<CheckIcon /></Button>
                <Button>Author <SmallAddIcon /></Button>
                <Button>Author <SmallAddIcon /></Button>
                <Button>Author <SmallAddIcon /></Button>
                <Button>Author <SmallAddIcon /></Button>
                <Button>Author <SmallAddIcon /></Button>
            </Box>
        </Box>

    )
}

export default Author;

