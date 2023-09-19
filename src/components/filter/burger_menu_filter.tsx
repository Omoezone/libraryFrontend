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
  } from '@chakra-ui/react'
  import { HamburgerIcon, CheckIcon, SmallAddIcon} from '@chakra-ui/icons'
  import {FcGenericSortingAsc} from 'react-icons/fc';
  import {LuListTodo} from 'react-icons/lu';
  import {GiFeather} from 'react-icons/gi';

 


function BurgerMenuFilter(){
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
                <Box textAlign={'left'} paddingLeft={8} marginTop={3} >
                    <Box display={'flex'}>
                        <FcGenericSortingAsc/>
                        <h3>Sorting</h3>
                    </Box>
                    <Box>
                        <Button colorScheme='teal'>Alphabetical  A-Z</Button>
                        <Button>Highest ratings</Button>
                    </Box>
                </Box>
                <Box textAlign={'left'} paddingLeft={8} marginTop={3} >
                    <Box display={'flex'}>
                        <LuListTodo/>
                        <h3>Subdjekt</h3>
                    </Box>
                    <Box>
                        <Button colorScheme='teal'>Subject<CheckIcon/></Button>
                        <Button>Subject <SmallAddIcon/></Button>
                        <Button>Subject <SmallAddIcon/></Button>
                        <Button>Subject <SmallAddIcon/></Button>
                        <Button>Subject <SmallAddIcon/></Button>
                        <Button>Subject <SmallAddIcon/></Button>
                    </Box>
                </Box>
                <Box textAlign={'left'} paddingLeft={8} marginTop={3}>

                </Box>
                <Box textAlign={'left'} paddingLeft={8} marginTop={3} >
                    <Box display={'flex'}>
                        <GiFeather/>
                        <h3>Author</h3>
                    </Box>
                    <Box>
                        <Button colorScheme='teal'>Author<CheckIcon/></Button>
                        <Button>Author <SmallAddIcon/></Button>
                        <Button>Author <SmallAddIcon/></Button>
                        <Button>Author <SmallAddIcon/></Button>
                        <Button>Author <SmallAddIcon/></Button>
                        <Button>Author <SmallAddIcon/></Button>
                    </Box>
                </Box>
           </Box>
           
        </MenuList>    
        
    </Menu>
   
}

export default BurgerMenuFilter;


