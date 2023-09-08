import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;`;

const Header = styled.div`
background-color: black;
display: flex;
flex-direction: row;
align-items: center;
font-size: 30px;
color: white;
font-weight: bold;
`;

const AppIcon = styled.img`
width:50px;
height: 50px;
border-radius: 50%;
padding: 5px;
`;

function App() {
  return (
    <Container>
      <Header><AppIcon src="https://tse4.mm.bing.net/th?id=OIP.o6_jPepu1HKYkWzKx5K8DAHaHa&pid=Api&P=0&h=180" />Recipe Search</Header>
    </Container>

  );
}

export default App;
