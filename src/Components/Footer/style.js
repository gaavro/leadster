import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100vw;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 10px 0;
  margin-block: 0px;
  background-color: #DEA7A7;
  color: white;
  .footerDivs {
    margin-inline: 15px;
    font-family: "Varela Round", sans-serif;
    font-size: 14px;
  }
  a{
    color:white;
  }

  @media(max-width:700px){
    
   .footerDivs{
     font-size:10px;
   }

   
}


  
`;
