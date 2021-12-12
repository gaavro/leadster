import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;  
background-color: #DEA7A7;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cpattern id='p' width='200' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath id='a' data-color='fill' fill='%23CD9A9A' d='M50 100L0 50V0l50 50 50-50h0v50l-50 50z'%3E%3C/path%3E%3Cuse xlink:href='%23a' x='100' y='-50'%3E%3C/use%3E%3Cuse xlink:href='%23a' x='100' y='50'%3E%3C/use%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23p)' width='100%25' height='100%25'%3E%3C/rect%3E%3C/svg%3E");
background-size: cover;
background-position: center;
background-repeat: no-repeat;

`;

export const LogoContainer = styled.div`
  max-width: 200px;
  max-height: 100px;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80px;
    
  }

  h1 {
    margin-left: 15px;
    color: white;
    font-family: 'Rock Salt', cursive;
    font-size: 42px;
  }


  :hover {
    cursor: pointer;
  }

  @media(max-width:500px){
    
    img{
      width: 50px;
    }
    h1{
      font-size:36px;
    }
}

 
`;

