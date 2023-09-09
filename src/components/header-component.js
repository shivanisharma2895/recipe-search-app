
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";


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

export const AppIcon = styled.img`
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
padding: 10px;
width: 40%;
justify-content: space-between;
`;
const SearchInput = styled.input`
border:none;
outline: none;
width: 93%;
border-radius: 5px;
padding: 10px;
font-size: 17px;
font-weight: bold;


`;
const Heading = () => {
    return (
        <Header>
            <AppName>
                <AppIcon src="https://tse4.mm.bing.net/th?id=OIP.o6_jPepu1HKYkWzKx5K8DAHaHa&pid=Api&P=0&h=180" />Recipe Search
            </AppName>
            <SearchComponent>
                <FaSearch />
                <SearchInput type="search" placeholder="Search Recipe" />
            </SearchComponent>
        </Header>
    );
}

export default Heading;