import { useEffect } from 'react'
import Hero from "./hero"
import TrendingBooks from "./trending_books"
import AllBooks from "./all_books"
import axios from "axios"
import Cookies from "js-cookie"
import { useUser } from "../user/userContext"
import { Box } from "@chakra-ui/react";
import { currentConfig } from '../../../config';

export default function Home() {
  let { user, dispatch } = useUser();
  const endpoint = currentConfig.apiEnvEndpoint;

  async function verifyUser() {
    if (Cookies.get('authToken')) {
      try {
        const response = await axios.post(`${endpoint}/auth/verify`, { "authToken": Cookies.get('authToken') });
        dispatch({ type: 'LOGIN', user: response.data });
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
      {/*  <FavoriteBooks /> */}
      <TrendingBooks />
      {/* <Subjeckts /> */}
      <AllBooks />

    </>
  )
}



