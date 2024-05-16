import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image01 from '../../assets/home/01.jpg'
import image02 from '../../assets/home/02.jpg'
import image03 from '../../assets/home/03.png'
import image04 from '../../assets/home/04.jpg'
import image05 from '../../assets/home/05.png'
import image06 from '../../assets/home/06.png'

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={image01} />
        </div>
        <div>
          <img src={image02} />
        </div>
        <div>
          <img src={image03} />
        </div>
        <div>
          <img src={image04} />
        </div>
        <div>
          <img src={image05} />
        </div>
        <div>
          <img src={image06} />
        </div>
        
      </Carousel>
    </div>
  );
};

export default Banner;
