import { useEffect } from 'react'
import Hero from "./hero"
import FavoriteBooks from "./favorit_books"
import Subjeckts from "./subjects"
import TrendingBooks from "./trending_books"
import AllBooks from "./all_books"
import axios from "axios"
import Cookies from "js-cookie"
import { useUser } from "../user/userContext" 

import { Box } from "@chakra-ui/react";

export default function Home() {

  let { user, dispatch } = useUser(); 
  console.log("User context value:", user);

  async function verifyUser() {
    if (Cookies.get('authToken')) {
      try {
        const response = await axios.post("http://localhost:3000/auth/verify", { "authToken": Cookies.get('authToken') });
        dispatch({ type: 'LOGIN', user: response.data });
        console.log("user info after axios: ", user, "Axios response:", response.data)
      } catch (error) {
        Cookies.remove('authToken');
        console.error("Axios Error or expired token:", error);
      }
    }
  }

  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <>
      <Box id="red_banner" bg={"red.gradient"}></Box>
      <Hero />
      <FavoriteBooks />
      <TrendingBooks />
      <Subjeckts />
      <AllBooks />

    </>
  )
}



