
import './App.css';
import Navbar from './Components/Navbar';
import Cards from './Components/CardsParent';
import Form from './Components/Form';
import ImageGallery from './Components/ImageGallery';
import Footer from './Components/Footer'


function App() {


  
  const handler=()=>{
   const app=document.querySelectorAll('.App')
   console.log(app)
        
  }
  return (
    <div className="App" >
    <Navbar/>
    <Cards/>
    <Form/>
    <ImageGallery/>
    <button onClick={handler} >Change Color</button>
    <hr></hr>
    <Footer/>
    
     
    </div>
  );
}

export default App;
