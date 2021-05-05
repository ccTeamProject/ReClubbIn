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
        <div>
            <GenreControl />  
            <div style={{ zIndex:"-999" }}>
          <Lottie options={defaultOptions} style={{height:"80vh", width:"60vw", display:"flex", flexWrap:"wrap", zIndex:"-999"  }} />          
        </div>
        </div>
    )
}

export default GenreSelection;
