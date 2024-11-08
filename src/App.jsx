 
import MG from "../components/images/MG.png"
import VG from "../components/images/VG.png"
import BBG from "../components/images/BBG.png"
import Nav from "../components/Header/nav.tsx";
import Header from "../components/header.tsx"
import Content from "../components/content.tsx"
import './App.css'

function App() {
  

  return (
       <div className="h-full"  style={{
        backgroundColor: '#0B1D26',
        backgroundImage: `url(${VG}), url(${MG}) , url(${BBG})`,
        backgroundSize: '100%, 100%, 120%',
        backgroundPosition: 'center 600px, center 300px, center -200px',
        backgroundRepeat: 'no-repeat',
         
        height: 'auto',
        overflow: 'hidden',
      }}
      
    >
      <Nav/>
      <Header/>
     <div className="mt-[120vh]">
     <Content/>
       
     </div>
    
       
       
   </div>
   
  
  
    
  
    )
}

export default App
