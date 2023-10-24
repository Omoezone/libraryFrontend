import { data } from "../../mockData/data"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { RiNumber1, RiNumber0 } from 'react-icons/ri'
import { Button, Box } from "@chakra-ui/react";

function Hero() {
    return (
        <>
            <Box className="hero">
                <h1 className="hero_text">Your Library</h1>
                <div>
                    <p>Within 7 days of borrowing a book it will be delivered to you, for free. Unless of course you fail to deliver it back after 31 days. You understand. Enjoy! </p>
                </div>
                <Button variant="primary" width="100%" marginTop="30">Sign Up</Button>
            </Box>
            <Box color="dark" bg="light.gradient" className="hero_book_container" margin={3}>
                <Box width={230} height={300} bg="gold.solid" borderRadius={3} marginTop={-5}></Box>
                <Box className="flex" margin={3} justifyContent={"center"}>
                    <MdChevronLeft size={30} />
                    <MdChevronRight size={30} />
                </Box>

                <Button variant={"secondary"} bg={"light.solid"} shadow="md">Borrow</Button>
                <Box className="flex" marginBottom={3} marginTop={3}>
                    <Box className="flex" >
                        <RiNumber1 size={50} className="mr-[-10px]" />
                        <RiNumber0 size={50} className="ml-[-10px]" />
                    </Box>
                    <h3>
                        Top Books <br />
                        of the <br />
                        Month <br />
                    </h3>
                </Box>
            </Box>
        </>
    )
}

export default Hero