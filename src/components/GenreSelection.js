import GenreControl from './GenreControl'
import Lottie from "react-lottie";
import animationData from "../lotties/circle-pulse.json";

const GenreSelection = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
   
       

    
    return (
        <>
       <div /* className="lottie-container" */>
                <Lottie options={defaultOptions} 
                    style={{ height:"90vh", width:"70vw", display:"flex", flexWrap:"wrap",
                    /* height:"1200px", width:"1200px", */  /* display: "flex", justifyContent: "center",
  alignItems: "center", */position:"absolute", left:"55%", top:"10%",/* display:"flex", flexWrap:"wrap",  */ /* marginRight:"-40vw", marginTop:"-50vh", */   overflow: "hidden"  }} />  
   <div className="genres-container">
            <GenreControl/>  
            </div>        
          </div>  
      
        </>
    )
}

export default GenreSelection;
