import { CardContainer } from "./style";

function Card({photo}){
    const photographer= (photo.photographer).toString()
   return(
    <CardContainer>
        <img src={photo.src.medium} alt={photo.id}/>
        <p>{photographer}</p>
    </CardContainer>
   ) 
}

export default Card;