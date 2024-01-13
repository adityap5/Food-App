import styled from "styled-components";
import { BASE_URL, Container } from "../../App";
import { Button } from "../../App";
function Searchresult({data}) {
  return (
    <div>
      <FoodCardContainer>
         <Container>
         <Foodcards>
            {data?.map((food)=>(
                   <FoodCard
                   key={food.name}
                   ><div className="foodimg">
                    <img src={ BASE_URL  + food.image}/>
                   </div>
                   <div className="foodinfo">
                    <div className="info">
                        <h3>{food.name}</h3>
                        <p>{food.text}</p>
                    </div>
                    <Button>${food.price.toFixed(2)}</Button>
                   </div>
                   </FoodCard>
            ))}</Foodcards>
         </Container>
        </FoodCardContainer>
    </div>
  )
}

export default Searchresult
const FoodCardContainer = styled.section`
min-height: calc(100vh - 210px);
background-image :url("/bg.png");
background-size : cover;`;

const Foodcards = styled.div`

display:flex;
flex-wrap:wrap;
justify-content:center;
gap:22px;
`;
const FoodCard = styled.div`
margin-top: 60px;
width: 344px;
height: 167px;
display:flex;
border-radius: 19.447px;
border: 0.659px solid #98F9FF;
background: url(<path-to-image>), lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
background-blend-mode: overlay, normal;
backdrop-filter: blur(13.184196472167969px);

.foodinfo{
    display:flex;
justify-content:space-between;
flex-direction:column;
align-items:end;
h3{
    margin-top:8px;
    font-size:16px;
    font-weight:500;

}
p{
    margin-top:6px;
    font-size:14px;
}
button{
    font-size:10px;
  
}
}
`;