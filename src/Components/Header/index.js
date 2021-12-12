import {  
    HeaderContainer,
    LogoContainer   
  } from "./style";
  import logo from "../../Assets/imgs/image.png";
  
  
  const Header = () => {

    return (
      <HeaderContainer>
       
          <LogoContainer >
            <img src={logo} alt="MainLogo" />
            <h1>My<span>Album</span>
            </h1>
          </LogoContainer>
          
      
       
      </HeaderContainer>
    );
  };
  
  export default Header;
  