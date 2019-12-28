import React from 'react'
import { CarouselProvider, Slider, Slide,Dot} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


class ImageSlider extends React.Component {
    render() {
        return(
            <CarouselProvider 
            naturalSlideWidth={100}
            naturalSlideHeight={150}
            totalSlides={3}
           interval ={1000}
           isPlaying={true}
          >
            <Slider>
              <Slide className="slide" index={0}>
                  <img src="https://via.placeholder.com/150" />
              </Slide>
              <Slide index={1}>
              <img src="https://via.placeholder.com/150" />
              </Slide>
              <Slide index={2}>
              <img src="https://via.placeholder.com/150" />
              </Slide>
            </Slider>
        
          </CarouselProvider>
        )
    }
}

export default ImageSlider
