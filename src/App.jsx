import './App.css'
import Navbar from './Navbar'
import Card from './Card'
import Data from './Data'

function App() {
  const newArr= Data.map(x=>{
    return  (
<Card 
       key={x.id}
     {...x}
      />
        
    )
  });

  return (
    <div className='app-container'>
      <Navbar/>
      
     {newArr}
      
    </div>
  )
}

export default App
