import { Grid, GridItem } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";
import "./App.css";
import NavBar from "./components/navigation/navbar";
import FooterBar from "./components/navigation/footer"
import Home from "./components/home/Home"

import BurgerMenuFilter from "./components/filter/burger_content";
import { Box, ChakraProvider } from "@chakra-ui/react"

import Theme from "./theme";
import '@fontsource/libre-baskerville/700.css'
import '@fontsource/libre-baskerville/400.css'
import '@fontsource/lato/700.css'
import '@fontsource/lato/400.css'


function App() {


  return (
    <ChakraProvider theme={Theme}>
      <div className="App">

      </div>


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
    </ChakraProvider>
  );
}

export default App;
