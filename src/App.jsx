import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

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
justify-content: space-between;
`;
const AppName = styled.div`
display : flex;
align-items: center;
`;

const AppIcon = styled.img`
width:50px;
height: 50px;
border-radius: 50%;
padding: 5px;
`;

const SearchComponent = styled.div`
display: flex;
flex-directon: row;
background-color: gray;
border-radius: 5px;
margin-right: 20px;
`;

function App() {
  return (
    <Container>
      <Header>
        <AppName>
          <AppIcon src="https://tse4.mm.bing.net/th?id=OIP.o6_jPepu1HKYkWzKx5K8DAHaHa&pid=Api&P=0&h=180" />Recipe Search
        </AppName>
        <SearchComponent>
          <BsSearch />
          <input />
        </SearchComponent>
      </Header>

    </Container>

  );
}

export default App;
