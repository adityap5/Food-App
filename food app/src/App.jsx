import { useEffect, useState } from "react";
import styled from "styled-components"
import Searchresult from "./Components/Searchresult/Searchresult";


export const BASE_URL = "http://localhost:9000";


const App =()=>{
const [data, setdata] = useState(null);
const [filtereData, setfiltereData] = useState(null);
const [loading, setloading] = useState(false);
const [error, seterror] = useState(null);
const [selectedbtn, setselectedbtn] = useState("all");


  useEffect(() => {
    const fetchFoodData =async()=>{

      setloading(true);
          try {
          const response = await fetch(BASE_URL);
          const json = await response.json();
          setdata(json);
          setfiltereData(json);
          setloading(false);
          } catch (error) {
            seterror("Unable to fetch Data")
          }
      
        };
        fetchFoodData();
  },[]);
  


const searchfood =(e)=>{
const searchValue = e.target.value;

if(searchValue == null) {
  setfiltereData(null);
};
const filter = data?.filter((food)=> food.name.toLowerCase().includes(searchValue.toLowerCase()));
setfiltereData(filter); 
};


const filterfood= (type)=>{
  if(type == "all"){
    setfiltereData(data);
    setselectedbtn("all");
    return;
  }
  const filter = data?.filter((food)=> food.type.toLowerCase().includes(type.toLowerCase()));
  setfiltereData(filter); 
setselectedbtn(type);
};
const filterbutton = [
  {
    name: "All",
    type:"all",
  },
  {
    name: "Breakfast",
    type:"breakfast",
  },
  {
    name: "Lunch",
    type:"lunch",
  },
  {
    name: "Dinner",
    type:"dinner",
  }
]

  if(error) return <div>{error}</div>;
  if(loading) return <div>Loading.......</div>;
   return(
    <>
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/Foody Zone.svg" alt="logo" />
        </div>
        <div className="search">
          <input onChange={searchfood}  type="text" placeholder="Search here..." />
        </div>

        
      </TopContainer>
      <FiterContainer>
        {
          filterbutton.map((value) =>  <Button isSelected={selectedbtn === value.type}key={value.name} onClick={()=>filterfood((value.type))}>{value.name}</Button>)
        }


        </FiterContainer>
        
    </Container>
    <Searchresult data={filtereData}/>
    </>
    
  );
};
export default App;
export const Container = styled.div`
max-width:1200px;
margin: 0 auto;
`;
const TopContainer= styled.section`
height:140px;
display:flex;
justify-content:space-between;
align-items:center;
padding:16px;
.search{
  input{
    background-color: transparent;
    border:1px solid red;
    color:white;
    border-radius:5px;
    height:40px;
    font-size:16px;
    padding:0 10px;
    &::placeholder{
      color:white;
    }
  }
}
@media( 0 < width < 600px){
  flex-direction: column;
  height:120px;
}
`;
const FiterContainer = styled.section`
display:flex;
justify-content:center;
gap:12px;
padding-bottom:40px;
`;

export const Button = styled.button`
background:${({isSelected})=> isSelected ? "#c60606": "#ff4343"};
outline: 1px solid ${({isSelected})=> isSelected ? "white": "black"};
border-radius:5px;
padding:6px 12px;
color:white;
cursor:pointer;
&:hover{
  background:#f22f2f;
}
`;
