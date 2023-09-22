import { Box, Button } from '@chakra-ui/react';
import { LuListTodo } from 'react-icons/lu';
import { CheckIcon, SmallAddIcon } from '@chakra-ui/icons'
import { useState } from 'react';

function Subdjekt() {

    const [selectedSub1, setSelectedSub1] = useState(true);
    const [selectedSub2, setSelectedSub2] = useState(true);
    const [selectedSub3, setSelectedSub3] = useState(true);
    const [selectedSub4, setSelectedSub4] = useState(true);
    const [selectedSub5, setSelectedSub5] = useState(true);
    const [selectedSub6, setSelectedSub6] = useState(true);

    /*  const selectOnClick = () => {
         setSelected(!selected)
     }; */

    return (

        <Box>
            <Box className='flex' marginBottom={3}>
                <LuListTodo className='white_icons' />
                <h3 style={{ color: 'white' }}>Subdjekt</h3>
            </Box>

            <Box className='button_grid'>

                <Button onClick={() => {
                    setSelectedSub1(!selectedSub1)
                }}
                    variant={selectedSub1 ? 'select' : 'selected'}>
                    Subject 1
                    {selectedSub1 ? <SmallAddIcon /> : <CheckIcon />}
                </Button>
                <Button onClick={() => {
                    setSelectedSub2(!selectedSub2)
                }}
                    variant={selectedSub2 ? 'select' : 'selected'}>
                    Subject 2
                    {selectedSub2 ? <SmallAddIcon /> : <CheckIcon />}
                </Button>
                <Button onClick={() => {
                    setSelectedSub3(!selectedSub3)
                }}
                    variant={selectedSub3 ? 'select' : 'selected'}>
                    Subject 3
                    {selectedSub3 ? <SmallAddIcon /> : <CheckIcon />}
                </Button>
                <Button onClick={() => {
                    setSelectedSub4(!selectedSub4)
                }}
                    variant={selectedSub4 ? 'select' : 'selected'}>
                    Subject 4
                    {selectedSub4 ? <SmallAddIcon /> : <CheckIcon />}
                </Button>
                <Button onClick={() => {
                    setSelectedSub5(!selectedSub5)
                }}
                    variant={selectedSub5 ? 'select' : 'selected'}>
                    Subject 5
                    {selectedSub5 ? <SmallAddIcon /> : <CheckIcon />}
                </Button>
                <Button onClick={() => {
                    setSelectedSub6(!selectedSub6)
                }}
                    variant={selectedSub6 ? 'select' : 'selected'}>
                    Subject 6
                    {selectedSub6 ? <SmallAddIcon /> : <CheckIcon />}
                </Button>
            </Box>
        </Box>

    )
}

export default Subdjekt;

