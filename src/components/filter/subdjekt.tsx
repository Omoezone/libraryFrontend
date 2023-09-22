import { Box, Button } from '@chakra-ui/react';
import { LuListTodo } from 'react-icons/lu';
import { CheckIcon, SmallAddIcon } from '@chakra-ui/icons'

function Subdjekt() {
    return (

        <Box>
            <Box className='flex' marginBottom={3}>
                <LuListTodo className='white_icons' />
                <h3 style={{ color: 'white' }}>Subdjekt</h3>
            </Box>

            <Box className='button_grid'>
                <Button variant='selected'>Subject <CheckIcon /></Button>
                <Button variant='select'>Subject <SmallAddIcon /></Button>
                <Button variant='select'>Subject <SmallAddIcon /></Button>
                <Button variant='select'>Subject <SmallAddIcon /></Button>
                <Button variant='select'>Subject <SmallAddIcon /></Button>
                <Button variant='select'>Subject <SmallAddIcon /></Button>
            </Box>
        </Box>

    )
}

export default Subdjekt;

