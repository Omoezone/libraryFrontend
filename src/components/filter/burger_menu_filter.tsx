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
  } from '@chakra-ui/react'
  import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon} from '@chakra-ui/icons'
 


function BurgerMenuFilter(){
    return <Menu> 
        <MenuButton display={'flex'}
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant={'outline'}
        />
        <MenuList>
            <MenuItem icon={<AddIcon />} command='⌘T'>
            New Tab
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
            New Window
            </MenuItem>
            <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
            Open Closed Tab
            </MenuItem>
            <MenuItem icon={<EditIcon />} command='⌘O'>
            Open File...
            </MenuItem>
        </MenuList>    
        
    </Menu>
   
}

export default BurgerMenuFilter;

function translate3d(arg0: number, px: any, arg2: number, px1: any, arg4: number, px2: any): any {
    throw new Error('Function not implemented.')
}
