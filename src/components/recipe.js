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




const RecipeComponent = (props) => {
    const { recipes } = props;

    return (
        <RecipeContainer>

            <CoverImage src={recipes.image} />
            <RecipeName>{recipes.label}</RecipeName>
            <IngredientText >Ingredients</IngredientText>
            <SeeMoreText onClick={() => window.open(recipes.url)}>See More</SeeMoreText>
        </RecipeContainer>
    )
}

export default RecipeComponent;