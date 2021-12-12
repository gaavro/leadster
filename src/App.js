
import './App.css';
import {useCallback, useEffect, useState} from "react"
import { getPhotos } from './Services/api';
import Card from './Components/Card';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const [photos, setPhotos] = useState([]); 
  const [page, setPage] = useState(1);
  const [next, setNext] = useState("")  

  const fetchAlbum = useCallback(
    async (searchTextParam) => {
      const data = await getPhotos({page: page});
      setPhotos(photos =>photos.concat(data.data.photos));
      setPage(page + 1);
      setNext(data.data.next_page)
    }, [page]);


  useEffect(() => {
    if (page <= 10){
    fetchAlbum();
    }
  }, [fetchAlbum]);
  
  return (
<div className="App">
      <Header/>
      <div className='main'>
      {photos.map((photo) => {
       return( <Card photo={photo} />
      )})}
   </div>
    <Footer/>
    </div>
  );
}

export default App;
