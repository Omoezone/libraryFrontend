import { Grid, GridItem } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";
import "./App.css";
import NavBar from "./components/navigation/navbar";
import FooterBar from "./components/navigation/footer"

import BurgerMenuFilter from "./components/filter/burger_menu_filter";
import { Box } from "@chakra-ui/react"

function App() {
 

  return (
    <>
    {/* <Box margin='-1rem'>
      <BurgerMenuFilter/>
    </Box> */}
    <div className="App">
   
    </div>
  
  
      <Grid
        templateAreas={{
          base: `"nav" "main" "footer"`,
          lg: `"nav nav" "aside main" "footer"`,
          
        }}
      >
        <GridItem gridArea="nav" >
          <NavBar />
        </GridItem>
        <GridItem gridArea="main">
          // main grid 
        </GridItem>
        <GridItem gridArea="footer" >
          <FooterBar />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
