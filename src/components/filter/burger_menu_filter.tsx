import { useState } from 'react';
import {
    Box,
    Text,

    Button,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    ChakraProvider,
    Card,
    CardBody,
    CardHeader,
    Input,

} from '@chakra-ui/react'
import { CheckIcon, SmallAddIcon } from '@chakra-ui/icons'
import { FcGenericSortingAsc } from 'react-icons/fc';
import { LuListTodo } from 'react-icons/lu';
import { GiFeather } from 'react-icons/gi';
import { TbRulerMeasure } from 'react-icons/tb';
import Theme from '../../theme';
import '@fontsource/libre-baskerville/700.css'
import '@fontsource/lato/700.css'
import '@fontsource/lato/400.css'

function BurgerConetnt() {
    const [sliderValue, setSliderValue] = useState(50)

    const labelStyles = {
        mt: '2',
        ml: '-2.5',
        fontSize: 'sm',
    }
    return (

        <ChakraProvider theme={Theme}>
            <Box bg="red.gradient">
                <Box display={'flex'}>
                    <FcGenericSortingAsc />
                    <h3 style={{ color: 'white' }}>Sorting</h3>
                </Box>

                <Box>
                    <Button>Alphabetical  A-Z</Button>
                    <Button>Highest ratings</Button>
                </Box>
            </Box>

            <Box>
                <Box display={'flex'}>
                    <LuListTodo />
                    <h4>Subdjekt</h4>
                    {/*  <Link textDecor={'underline'}>Helo</Link> */}
                    <p>Helo</p>
                    <Text className='smol'>Helo</Text>
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

            <Box>
                <Box display={'flex'}>
                    <TbRulerMeasure />
                    <h3>Number of pages</h3>
                </Box>
                <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)} >
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
                        color='dark'
                        background='gold.solid'
                        mt='-10'
                        ml='-5'
                        w='12'
                    >
                        {sliderValue}
                    </SliderMark>
                    <SliderTrack borderColor='gold.solid' borderStyle='solid' borderWidth='1px' h='0.8rem' borderRadius='20px' bg='light.solid'>
                        <SliderFilledTrack bg='gold.gradient' />
                    </SliderTrack>
                    <SliderThumb bg='gold.gradient' borderColor='gold.solid' w='1.3rem' h='1.3rem' />
                </Slider>
            </Box>

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
        </ChakraProvider>
    )

}

export default BurgerConetnt;


