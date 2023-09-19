import React from 'react';
import { useState } from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
    Box,
    Button,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'
  import { HamburgerIcon, CheckIcon, SmallAddIcon} from '@chakra-ui/icons'
  import {FcGenericSortingAsc} from 'react-icons/fc';
  import {LuListTodo} from 'react-icons/lu';
  import {GiFeather} from 'react-icons/gi';
  import {TbRulerMeasure} from 'react-icons/tb';

 


function BurgerMenuFilter(){
    const [sliderValue, setSliderValue] = useState(50)

    const labelStyles = {
        mt: '2',
        ml: '-2.5',
        fontSize: 'sm',
    }
    return <Menu> 
        <MenuButton display={'flex'}
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant={'outline'}
        />
        <MenuList>
           <Box padding={2} w='100vw'>
                <h2>Filter</h2>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            
                <MenuDivider/>
                <MenuDivider/>
                <MenuDivider/>
                <MenuGroup>
                    <Box display={'flex'}>
                        <FcGenericSortingAsc/>
                        <h3>Sorting</h3>
                    </Box>
                    <MenuDivider/>
                    <MenuOptionGroup>
                        <Button colorScheme='teal'>Alphabetical  A-Z</Button>
                        <Button>Highest ratings</Button>
                    </MenuOptionGroup>
                </MenuGroup>
                <MenuDivider/>
                <MenuDivider/>
                <MenuDivider/>
                <MenuDivider/>
                <MenuGroup  >
                    <Box display={'flex'}>
                        <LuListTodo/>
                        <h3>Subdjekt</h3>
                    </Box>
                    <MenuDivider/>
                    <MenuOptionGroup>
                        <Button colorScheme='teal'>Subject<CheckIcon/></Button>
                        <Button>Subject <SmallAddIcon/></Button>
                        <Button>Subject <SmallAddIcon/></Button>
                        <Button>Subject <SmallAddIcon/></Button>
                        <Button>Subject <SmallAddIcon/></Button>
                        <Button>Subject <SmallAddIcon/></Button>
                    </MenuOptionGroup>
                </MenuGroup>
                <MenuDivider/>
                <MenuDivider/>
                <MenuDivider/>
                <MenuDivider/>
                <MenuGroup >
                <Box display={'flex'}>
                        <TbRulerMeasure/>
                        <h3>Number of pages</h3>
                    </Box>
                    <MenuDivider/>
                    <MenuDivider/>
                    <MenuDivider/>
                    <MenuDivider/>
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
                </MenuGroup>
                <MenuDivider/>
                <MenuDivider/>
                <MenuDivider/>
                <MenuDivider/>
                <MenuGroup  >
                    <Box display={'flex'}>
                        <GiFeather/>
                        <h3>Author</h3>
                    </Box>
                    <MenuDivider/>
                    <MenuOptionGroup>
                        <Button colorScheme='teal'>Author<CheckIcon/></Button>
                        <Button>Author <SmallAddIcon/></Button>
                        <Button>Author <SmallAddIcon/></Button>
                        <Button>Author <SmallAddIcon/></Button>
                        <Button>Author <SmallAddIcon/></Button>
                        <Button>Author <SmallAddIcon/></Button>
                    </MenuOptionGroup>
                </MenuGroup>
           </Box>
           
        </MenuList>    
        
    </Menu>
   
}

export default BurgerMenuFilter;


