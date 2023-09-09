import styled from "styled-components";
import Heading from "./components/header-component";
import RecipeList from "./components/recipe-list";



const Container = styled.div`
display: flex;
flex-direction: column;`;




function App() {
  return (
    <Container>
      <Heading />
      <RecipeList />

    </Container>

  );
}

export default App;
