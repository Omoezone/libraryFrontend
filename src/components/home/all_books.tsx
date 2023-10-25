import { data } from "../../mockData/data"
import { Box, Center } from "@chakra-ui/react"
import SearchBar from "../navigation/searchbar"

export default function AllBooks() {
    return (
        <>
            <h2 className="hero_text">All Books</h2>
            <Box className="flex" justifyContent={"center"} marginBottom={3}>
                <SearchBar />
            </Box>
            <Box id="all_books_container">
                {data.map((item) => (
                    <img
                        src={item.img}
                        alt='book'
                    />
                ))}
            </Box>
        </>
    )
}