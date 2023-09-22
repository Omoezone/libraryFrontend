import { Box, Button } from '@chakra-ui/react';
import { CheckIcon, SmallAddIcon } from '@chakra-ui/icons'
import { GiFeather } from 'react-icons/gi';

function Author() {
    return (

        <Box>
            <Box className='flex' marginBottom={3}>
                <GiFeather className='white_icons' />
                <h3 style={{ color: 'white' }}>Author</h3>
            </Box>

            <Box className='button_grid'>
                <Button variant='selected'>Author<CheckIcon /></Button>
                <Button variant='select'>Author <SmallAddIcon /></Button>
                <Button variant='select'>Author <SmallAddIcon /></Button>
                <Button variant='select'>Author <SmallAddIcon /></Button>
                <Button variant='select'>Author <SmallAddIcon /></Button>
                <Button variant='select'>Author <SmallAddIcon /></Button>
            </Box>
        </Box>

    )
}

export default Author;

