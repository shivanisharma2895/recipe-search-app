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


    const [recipes, setRecipes] = useState([]);
    const fetchRecipe = (searchString) => {
        axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`).then((res) => {
            console.log(res.data);
            setRecipes(res.data.hits);
        }).catch((error) => {
            console.log("error", error);
        })
    }



    useEffect(() => {
        fetchRecipe();
    }, []);


    return (
        <RecipeListContainer>
            {recipes.length && recipes.map((recipe) => <RecipeComponent {...recipe} />)

            }
        </RecipeListContainer>
    );
}

export default RecipeList;