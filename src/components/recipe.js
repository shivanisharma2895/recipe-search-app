import styled from "styled-components"

const RecipeContainer = styled.div`
display: flex;
flex-direction: column;
box-shadow: 0 3px 10px 0 #aaa;
padding: 30px;
width: 300px;
`;

const RecipeName = styled.span`
font-size: 15px;
font-weight: bold;
color: black;
margin: 10px 0px;

`;

const IngredientText = styled.span`
border: solid 1px green;
text-align: center;
color: green;
margin: 10px 0;
cursor: pointer;
padding: 10px 15px;
font-size: 15px;
border-radius: 3px;
`;

const SeeMoreText = styled(IngredientText)`
color: red;
border: solid 1px red;
`;

const CoverImage = styled.img`
height: 200px;
`;



const RecipeComponent = () => {
    return (
        <RecipeContainer>
            <CoverImage src="https://tse4.mm.bing.net/th?id=OIP.o6_jPepu1HKYkWzKx5K8DAHaHa&pid=Api&P=0&h=180" />
            <RecipeName>Mango Curry</RecipeName>
            <IngredientText>Ingredients</IngredientText>
            <SeeMoreText>See More</SeeMoreText>
        </RecipeContainer>
    )
}

export default RecipeComponent;