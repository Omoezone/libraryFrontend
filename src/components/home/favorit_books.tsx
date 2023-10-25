import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Box, Img } from "@chakra-ui/react";
import BookCard from "../book/bookCard"
import BookCardSkeleton from "../book/bookCardSkeleton";
import useBooks from "../../hooks/useBooks";

export default function FavoriteBooks() {


    const slideLeft = () => {
        const slider = document.getElementById('slider');
        if (slider) {
            slider.scrollLeft = slider.scrollLeft - 500;
        }
    }

    const slideRight = () => {
        const slider = document.getElementById('slider');
        if (slider) {
            slider.scrollLeft = slider.scrollLeft + 500;
        }
    }

    const { data, error, isLoading } = useBooks();
    const skeleton = [...Array(8).keys()];

    return (
        <>
            <Box margin={3} className="slider_container">
                <Box className='relative flex items-center'>
                    <Box
                        id='slider'
                        className='overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                    >
                        {data &&
                            data.map((book, index) => (
                                <Img
                                    key={book.book_id || index}
                                    shadow={1}
                                    className='inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                                    src={"../../../public/assets/covers/" + book.picture}
                                    alt='/'
                                />
                            ))}
                    </Box>

                </Box>
                <Box display={"grid"} justifyContent={"end"} className="slider_right">
                    <h3 className="banner_content">Favorit Books</h3>
                    <Box className="flex" justifyContent={"end"} color="white">
                        <MdChevronLeft className='cursor-pointer hover:opacity-100' onClick={slideLeft} size={30} />
                        <MdChevronRight className='cursor-pointer hover:opacity-100' onClick={slideRight} size={30} />
                    </Box>
                </Box>
            </Box>
        </>
    );
}