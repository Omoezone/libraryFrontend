
import Hero from "./hero"
import FavoriteBooks from "./favorit_books"
import Subjeckts from "./subjects"
import TrendingBooks from "./trending_books"
import AllBooks from "./all_books"

import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box id="red_banner" bg={"red.gradient"}></Box>
      <Hero />
      <FavoriteBooks book={undefined} />
      <TrendingBooks />
      <Subjeckts />
      <AllBooks />

    </>
  )
}



