import styled from "styled-components";
export const CardContainer = styled.div`
 margin: 15px; 
 background-color:white;
 padding: 5px;
 height: 300px;
 box-shadow: 2px 2px 5px 2px rgba(0,0,0,0.42);
 img{
   
  max-height: 80%;
     min-width: 100%;
     object-fit: cover;
     vertical-align: bottom;
 }
 p{ 
    text-transform: capitalize;
    font-family: 'Caveat', cursive;
    font-size: 20px;
    width:100%
 }
  @media(max-width:500px){
      height:200px;
  }
`;

