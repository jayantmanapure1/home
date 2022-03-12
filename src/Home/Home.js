import './Home.css'
import {Link} from 'react-router-dom'
function Home() {
    return (
   
   <>
   <div className='home-continer'>🏡🏡Home🏡🏡
   <br/>
   <br/>
   <Link to ="/about">Go To About Route</Link>
   
   </div>

   </>
    );
  }
  
  export default Home;