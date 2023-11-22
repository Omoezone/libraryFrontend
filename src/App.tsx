import { Grid, GridItem } from "@chakra-ui/layout";
import { Box, CSSReset, ChakraProvider, HStack } from "@chakra-ui/react"
import "./App.css";
import '@fontsource/libre-baskerville/700.css'
import '@fontsource/libre-baskerville/400.css'
import '@fontsource/lato/700.css'
import '@fontsource/lato/400.css'
import Theme from "./theme";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Cookies from "js-cookie";
import axios from "axios";
import Home from "./components/home/Home"
import NavBar from "./components/navigation/navbar";
import FooterBar from "./components/navigation/footer"
import { UserProvider } from "./components/user/userContext";
import { useUser } from "./components/user/userContext";

const queryClient = new QueryClient();

function App() {

  let { user, dispatch } = useUser(); 
  console.log("User context value:", user);

  async function verifyUser() {
    if (Cookies.get('authToken')) {
      try {
        const response = await axios.post("http://localhost:3000/auth/verify", { "authToken": Cookies.get('authtoken') });
        dispatch({ type: 'LOGIN', user: response.data });
        console.log("user info after axios: ", user, "Axios response:", response.data)
      } catch (error) {
        Cookies.remove('authToken');
        console.error("Axios Error or expired token:", error);
      }
    }
  }

  React.useEffect(() => {
    verifyUser();
  }, []);

  React.useEffect(() => {
    console.log("User after axios:", user);
  }, [user]);

  return (
    <ChakraProvider theme={Theme}>
      <UserProvider>
      <CSSReset />
      <QueryClientProvider client={queryClient}> 
        <Grid
          templateAreas={{
            base: `"nav" "main" "footer"`,
            lg: `"nav nav" "aside main" "footer"`,
          }}
        >
          <GridItem gridArea="nav" className="nav" width={"100%"}>
            <NavBar />
          </GridItem>

          <GridItem gridArea="main">
            <Home />
          </GridItem>

          <GridItem gridArea="footer" >
            <FooterBar />
          </GridItem>
        </Grid>
      </QueryClientProvider>
      </UserProvider>
    </ChakraProvider>
  );
}

export default App;