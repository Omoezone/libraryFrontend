import { Box, Button } from '@chakra-ui/react';
import { BsSortDownAlt } from 'react-icons/bs';

function Sorting() {
    return (

        <Box>
            <Box className='flex' marginBottom={3}>
                <BsSortDownAlt className='white_icons' />
                <h3 style={{ color: 'white' }}>Sorting</h3>
            </Box>

            <Box className='button_grid'>
                <Button variant='selected'>Alphabetical  A-Z</Button>
                <Button variant='select'>Highest ratings</Button>
            </Box>
        </Box>
    )
}

export default Sorting;

