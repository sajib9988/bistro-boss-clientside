import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import pic1 from '../../Pic home/01.jpg';
import pic2 from '../../Pic home/02.jpg';
import pic3 from '../../Pic home/03.png';
import pic4 from '../../Pic home/04.jpg';
import pic5 from '../../Pic home/05.png';
import pic6 from '../../Pic home/06.png';


const Banner = () => {
    return (
           <div>
                <Carousel>
        <div>
            <img src={pic1} />
       
        </div>
        <div>
            <img src={pic2} />
       
        </div>
        <div>
            <img src={pic3} />
       
        </div>
        <div>
            <img src={pic4} />
       
        </div>
        <div>
            <img src={pic5} />
       
        </div>
        <div>
            <img src={pic6} />
       
        </div>
    
  
    </Carousel>
           </div>
    );
};

export default Banner;