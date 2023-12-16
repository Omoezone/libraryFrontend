import { Box, Divider } from '@chakra-ui/react'

import Sorting from './sorting';
import Subdjekt from './subdjekt';
import Pages from './pages';
import Author from './author';


function BurgerConetnt() {
    return (
        <>
            <Box>
                <h2 style={{ color: 'white', textAlign: 'center' }}>Filter</h2>
            </Box>
            <Divider h='8' opacity={0} />
            <Sorting />
            <Divider h='8' opacity={0} />
            <Subdjekt />
            <Divider h='8' opacity={0} />
            <Pages />
            <Divider h='8' opacity={0} />
            <Author />
        </>
    )
}
export default BurgerConetnt;


