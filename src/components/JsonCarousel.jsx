import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import teacher from "../assets/images/teacher.svg"


const JsonCarousel = ({ jsonData }) => {
    return (
      <Carousel showThumbs={true} infiniteLoop={true}
      centerMode={true}
      emulateTouch={true}
      centerSlidePercentage={20}
      autoPlay={true}	>
        {jsonData.map((item, id) => (
          <div key={id} className=' bg-slate-500'>
            <img src={teacher} alt={item.title} />
            <p className="">{item.title}</p>
          </div>
        ))}
      </Carousel>
    );
  };

  export default JsonCarousel;
