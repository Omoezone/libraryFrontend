import { Box, Button } from '@chakra-ui/react';
import { BsSortDownAlt } from 'react-icons/bs';
import { useState } from 'react';

function Sorting() {

    const [sort, setSort] = useState(true);

    return (

        <Box>
            <Box className='flex' marginBottom={3}>
                <BsSortDownAlt className='white_icons' />
                <h3 style={{ color: 'white' }}>Sorting</h3>
            </Box>

            <Box className='button_grid'>
                <Button
                    onClick={() => {
                        setSort(!sort)
                    }}
                    variant={sort ? 'selected' : 'select'} >Alphabetical  A-Z</Button>
                <Button
                    onClick={() => {
                        setSort(!sort)
                    }} variant={sort ? 'select' : 'selected'} >Highest ratings</Button>
            </Box>
        </Box>
    )
}

export default Sorting;



