import { Grid, GridItem } from "@chakra-ui/layout";
import "./App.css";
import NavBar from "./components/navigation/navbar";
import FooterBar from "./components/navigation/footer"
import { Box, CSSReset, ChakraProvider, HStack } from "@chakra-ui/react"

import Theme from "./theme";
import '@fontsource/libre-baskerville/700.css'
import '@fontsource/libre-baskerville/400.css'
import '@fontsource/lato/700.css'
import '@fontsource/lato/400.css'
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./components/home/Home"
import { UserProvider } from "./components/user/userContext";

const queryClient = new QueryClient();

function App() {
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