import styled from "styled-components";
import RecipeComponent from "./recipe";
import axios from "axios";
import { useEffect, useState } from "react";

const RecipeListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
padding:30px;
gap: 20px;
`;




const RecipeList = () => {
    const APP_ID = "a52b4d43";
    const APP_KEY = "e0e5c667605f5e91d8275c973531b80a";


    const [recipess, setRecipess] = useState([]);
    const fetchRecipe = async (searchString) => {
        const res = await axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        console.log(res.data);
        setRecipess(res.data.hits);

    }

    useEffect(() => {
        fetchRecipe()
    }, []);



    return (
        <RecipeListContainer>
            {recipess.length && recipess.map((recipes) => <RecipeComponent recipes={recipes.recipe} />)
            }
        </RecipeListContainer>
    );
}

export default RecipeList;