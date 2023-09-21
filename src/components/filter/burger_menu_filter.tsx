import React from 'react';
import { useState } from 'react';
import {
    Box,
    Button,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react'
import { HamburgerIcon, CheckIcon, SmallAddIcon } from '@chakra-ui/icons'
import { FcGenericSortingAsc } from 'react-icons/fc';
import { LuListTodo } from 'react-icons/lu';
import { GiFeather } from 'react-icons/gi';
import { TbRulerMeasure } from 'react-icons/tb';




function BurgerConetnt() {
    const [sliderValue, setSliderValue] = useState(50)

    const labelStyles = {
        mt: '2',
        ml: '-2.5',
        fontSize: 'sm',
    }
    return (
        <>
            <Box>

                <Box>
                    <Box display={'flex'}>
                        <FcGenericSortingAsc />
                        <h3>Sorting</h3>
                    </Box>

                    <Box>
                        <Button colorScheme='teal'>Alphabetical  A-Z</Button>
                        <Button>Highest ratings</Button>
                    </Box>
                </Box>




                <Box  >
                    <Box display={'flex'}>
                        <LuListTodo />
                        <h3>Subdjekt</h3>
                    </Box>

                    <Box>
                        <Button colorScheme='teal'>Subject<CheckIcon /></Button>
                        <Button>Subject <SmallAddIcon /></Button>
                        <Button>Subject <SmallAddIcon /></Button>
                        <Button>Subject <SmallAddIcon /></Button>
                        <Button>Subject <SmallAddIcon /></Button>
                        <Button>Subject <SmallAddIcon /></Button>
                    </Box>
                </Box>



                <Box >
                    <Box display={'flex'}>
                        <TbRulerMeasure />
                        <h3>Number of pages</h3>
                    </Box>




                    <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
                        <SliderMark value={25} {...labelStyles}>
                            25
                        </SliderMark>
                        <SliderMark value={50} {...labelStyles}>
                            50
                        </SliderMark>
                        <SliderMark value={75} {...labelStyles}>
                            75
                        </SliderMark>
                        <SliderMark
                            value={sliderValue}
                            textAlign='center'
                            bg='teal'
                            color='white'
                            mt='-10'
                            ml='-5'
                            w='12'
                        >
                            {sliderValue}
                        </SliderMark>
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Box>

                <Box  >
                    <Box display={'flex'}>
                        <GiFeather />
                        <h3>Author</h3>
                    </Box>

                    <Box>
                        <Button colorScheme='teal'>Author<CheckIcon /></Button>
                        <Button>Author <SmallAddIcon /></Button>
                        <Button>Author <SmallAddIcon /></Button>
                        <Button>Author <SmallAddIcon /></Button>
                        <Button>Author <SmallAddIcon /></Button>
                        <Button>Author <SmallAddIcon /></Button>
                    </Box>
                </Box>
            </Box>

        </>)

}

export default BurgerConetnt;


