import { Grid, GridItem } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";
import "./App.css";
import NavBar from "./components/navigation/navbar";
import FooterBar from "./components/navigation/footer"


function App() {
  return (
    <>
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
