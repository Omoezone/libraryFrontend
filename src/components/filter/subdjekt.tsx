import { Box, Button } from '@chakra-ui/react';
import { LuListTodo } from 'react-icons/lu';
import { CheckIcon, SmallAddIcon } from '@chakra-ui/icons'

function Subdjekt() {
    return (

        <Box>
            <Box display={'flex'}>
                <LuListTodo />
                <h4>Subdjekt</h4>
                <p>Helo</p>

            </Box>

            <Box>
                <Button variant='primary'>Subject<CheckIcon /></Button>
                <Button variant='secondary'>Subject <SmallAddIcon /></Button>
                <Button variant='confirm'>Subject <SmallAddIcon /></Button>
                <Button variant='selected'>Subject <SmallAddIcon /></Button>
                <Button variant='select'>Subject <SmallAddIcon /></Button>
                <Button>Subject <SmallAddIcon /></Button>
            </Box>
        </Box>

    )
}

export default Subdjekt;

