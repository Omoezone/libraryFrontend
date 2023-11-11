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

  const { dispatch } = useUser();

  let { user } = useUser(); 

  async function verifyUser() {
    if (Cookies.get('userToken') && user) {
      try {
        const response = await axios.post("http://localhost:3000/auth/verify", { "authToken": Cookies.get('userToken') });
        console.log("Axios response:", response);
        dispatch({ type: 'LOGIN', user: response.data });
      } catch (error) {
        Cookies.remove('userToken');
        console.error("Axios Error or expired token:", error);
      }
    }
  }

  React.useEffect(() => {
    verifyUser();
  }, []);

  return (
    <ChakraProvider theme={Theme}>
      <UserProvider>
      <CSSReset />
      <QueryClientProvider client={queryClient}> {/* Wrap your app with QueryClientProvider */}
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