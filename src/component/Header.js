
import Navigation from './Navigation'

const Header = () => {
    return ( 
        <div>
            <Navigation />
            <section class="Section_Header">
            <img id="foto_with_H1"  src="./assets/img/element3.png" alt=""></img>
            
        <main class="main_Header">
        <article>
        

           <h1>Explore and  <br />Travel</h1> 
           <h6>Holiday finder</h6>
           <p>_____</p>
           <div><img class="circle_header" src="./assets/img/element2.png" alt=""></img></div>

           <select name="" id="">
               <option value="Loction">Location</option>
            
            </select>

            <select name="" id="">
               <option value="Activity">Activity</option>
            
            </select>
            <br />

            <select name="" id="">
               <option value="Grade">Grade</option>
            
            </select>
            <select name="" id="">
               <option value="Date">Date</option>
            
            </select>
            <br />
            <div >
            <button>Explore</button>
            
            </div>

            </article>
      
         
       <img id="header_Foto" src="./assets/img/thousand-01 1.png" alt=""></img>

        </main>
        </section>
        <img class="element_header" src="./assets/img/element2.png" alt=""></img>
        </div>
     );
}
 
export default Header;
