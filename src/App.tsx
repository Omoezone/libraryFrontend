import { Grid, GridItem } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";
import "./App.css";
import NavBar from "./components/navigation/navbar";
import FooterBar from "./components/navigation/footer"
import {getFavoriteBooks, getSavedBooks, getSubjectsBooks} from "./components/home/Home"

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
          
          <div>
            <h2>favorite books</h2>
              <ul>
                {getFavoriteBooks()}  
              </ul>
          </div>
          
          <br/>
          <br/>
          
          <div>
            
            <h2>Saved books</h2>
              <ul>
                {getSavedBooks()}  
              </ul>
          </div>

          <br/>
          <br/>

          <div>
            <h2>Subjects</h2>
              <ul>
                {getSubjectsBooks()}  
              </ul>
          </div>

        </GridItem>
        
        <GridItem gridArea="footer" >
          <FooterBar />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
