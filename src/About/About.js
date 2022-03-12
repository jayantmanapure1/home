import './About.css'
import {Routes, Route, Link,useParams} from 'react-router-dom'
import Doraemon from '../Doraemon/Doraemon';
import Nobita from '../Nobita/Nobita';
 function About(){
     const {id} = useParams()
     let url='';
     let name='';
     if(id=== '1'){
      url = 'https://1.bp.blogspot.com/-2gfpQ74UjwA/XsufsYk5zFI/AAAAAAAAEI4/_8TKx3NUNQYjCmDOqlZNchoxELXhvYvjQCK4BGAsYHg/clipart749822.png'
      name ='Nobita' 
    }else if(id === '2'){
         url = 'https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png'
         name ='Doraemon'
     }else if(id=== '3'){
         url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_5Cb8DFKJz_xbxv-sQrKNJ7asdWvZ2RbcDwVoOOH0SEN7YYXTv6wxxc_D8dPwPk4__ZE&usqp=CAU'
         name ='Shizuka'
        }else if(id==='4'){
            name='Giyan'
         url = 'https://www.cuteeasydrawings.com/uploads/allimg/200929/1_200929093852_6.jpg'
     }else{
         name ='Sunio'
         url = 'https://i.pinimg.com/236x/42/7e/1b/427e1bd46f1db57628bb0b5d295ac422.jpg'
     }
     return(
         <>
         <div className='home-continer1'>👤👤About:{name}
         <br/>
         <img src={`${url}`} alt="user image"/>
         <br/>
         {/*<Link to="doraemon"><button>Doraemon</button></Link>
         

         <Link to="nobita"><button>Nobita</button></Link>
         <br/>
         <Routes>
             <Route path='doraemon' element={<Doraemon/>}/>
             <Route path='nobita' element={<Nobita/>}/>
     </Routes>*/}
         </div>
         </>

     );
 }
 export default About;