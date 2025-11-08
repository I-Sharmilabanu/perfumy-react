import one from "../assets/images/download.jpg"
import two from "../assets/images/download (1).jpg"

function Products(){
    return(
     <div class="products">
        <div class="box">
            <img src={one} alt="one"/>
            <p> amet consectetur adipisicing elit. Ab soluta et earum repudiandae?</p>
        </div>
        <div class="box">
            <img src={two} alt="two"/>
            <p>  adipisicing elit. Officiis explicabo quis cum nam, exercitationem fugit!</p>
        </div>
       <div class="box">
        <img src={one} alt="three"/>
        <p> sit amet consectetur adipisicing elit. Doloremque, quibusdam?</p>
       </div>

    </div>)
    
}
export default Products