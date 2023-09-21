import { Box, Button } from '@chakra-ui/react';
import { FcGenericSortingAsc } from 'react-icons/fc';

function Sorting() {
    return (

        <Box>
            <Box display={'flex'}>
                <FcGenericSortingAsc />
                <h3 >Sorting</h3>
            </Box>

            <Box>
                <Button>Alphabetical  A-Z</Button>
                <Button>Highest ratings</Button>
            </Box>
        </Box>

    )
}

export default Sorting;

