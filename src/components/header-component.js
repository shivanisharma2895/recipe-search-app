
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";


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
    const [timeOutId, updateTimeOutId] = useState();

    const APP_ID = "a52b4d43";
    const APP_KEY = "e0e5c667605f5e91d8275c973531b80a";
    const fetchRecipe = (searchString) => {
        axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`).then((res) => {
            console.log(res.data);

        }).catch((error) => {
            console.log("error", error);
        })
    }


    const onTextChange = (event) => {
        clearTimeout(timeOutId);
        const timeOut = setTimeout(() => fetchRecipe(event.target.value), 500);
        updateTimeOutId(timeOut);
    }//debouncing: avoiding api calls on each typing.




    return (
        <Header>
            <AppName>
                <AppIcon src="https://tse4.mm.bing.net/th?id=OIP.o6_jPepu1HKYkWzKx5K8DAHaHa&pid=Api&P=0&h=180" />Recipe Search
            </AppName>
            <SearchComponent>
                <FaSearch />
                <SearchInput type="search" placeholder="Search Recipe" onChange={onTextChange} />
            </SearchComponent>
        </Header>
    );
}

export default Heading;