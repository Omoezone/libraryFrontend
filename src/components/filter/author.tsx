import { Box, Button } from '@chakra-ui/react';
import { CheckIcon, SmallAddIcon } from '@chakra-ui/icons'
import { GiFeather } from 'react-icons/gi';
import { useState } from 'react';

function Author() {
    const [selectedAou1, setSelectedAou1] = useState(true);
    const [selectedAou2, setSelectedAou2] = useState(true);
    const [selectedAou3, setSelectedAou3] = useState(true);
    const [selectedAou4, setSelectedAou4] = useState(true);
    const [selectedAou5, setSelectedAou5] = useState(true);
    const [selectedAou6, setSelectedAou6] = useState(true);
    return (

        <Box>
            <Box className='flex' marginBottom={3}>
                <GiFeather className='white_icons' />
                <h3 style={{ color: 'white' }}>Author</h3>
            </Box>

            <Box className='button_grid'>
                <Button
                    onClick={() => {
                        setSelectedAou1(!selectedAou1)
                    }}
                    variant={selectedAou1 ? 'selected' : 'select'}>
                    Author 1
                    {selectedAou1 ? <CheckIcon /> : <SmallAddIcon />}
                </Button>
                <Button
                    onClick={() => {
                        setSelectedAou2(!selectedAou2)
                    }}
                    variant={selectedAou2 ? 'selected' : 'select'}>
                    Author 2
                    {selectedAou2 ? <CheckIcon /> : <SmallAddIcon />}
                </Button>
                <Button
                    onClick={() => {
                        setSelectedAou3(!selectedAou3)
                    }}
                    variant={selectedAou3 ? 'selected' : 'select'}>
                    Author 3
                    {selectedAou3 ? <CheckIcon /> : <SmallAddIcon />}
                </Button>
                <Button
                    onClick={() => {
                        setSelectedAou4(!selectedAou4)
                    }}
                    variant={selectedAou4 ? 'selected' : 'select'}>
                    Author 4
                    {selectedAou4 ? <CheckIcon /> : <SmallAddIcon />}
                </Button>
                <Button
                    onClick={() => {
                        setSelectedAou5(!selectedAou5)
                    }}
                    variant={selectedAou5 ? 'selected' : 'select'}>
                    Author 5
                    {selectedAou5 ? <CheckIcon /> : <SmallAddIcon />}
                </Button>
                <Button
                    onClick={() => {
                        setSelectedAou6(!selectedAou6)
                    }}
                    variant={selectedAou6 ? 'selected' : 'select'}>
                    Author 6
                    {selectedAou6 ? <CheckIcon /> : <SmallAddIcon />}
                </Button>

            </Box>
        </Box>

    )
}

export default Author;

