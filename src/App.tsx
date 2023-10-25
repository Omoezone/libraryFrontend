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
import BookGrid from "./components/book/bookGrid";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./components/home/Home"

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <CSSReset />
      <QueryClientProvider client={queryClient}> {/* Wrap your app with QueryClientProvider */}
        <div className="App">
          {/* Your existing content */}
        </div>

        <Grid
          templateAreas={{
            base: `"nav" "main" "footer"`,
            lg: `"nav nav" "aside main" "footer"`,
          }}
        >
          <GridItem gridArea="nav">
            <NavBar />
          </GridItem>

          <GridItem gridArea="main">
            <Home />
          </GridItem>

          <GridItem gridArea="footer">
            <FooterBar />
          </GridItem>
        </Grid>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;