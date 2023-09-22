import {
    Box,


    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,

} from '@chakra-ui/react';
import { TbRulerMeasure } from 'react-icons/tb';
import { useState } from 'react';

function Pages() {
    const [sliderValue, setSliderValue] = useState(50)

    const labelStyles = {
        mt: '2',
        ml: '-2.5',
        fontSize: 'sm',
        color: 'white',
    }
    return (

        <Box>
            <Box className='flex' marginBottom={8}>
                <TbRulerMeasure className='white_icons' />
                <h3 style={{ color: 'white' }}>Pages</h3>
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

    )
}

export default Pages;

