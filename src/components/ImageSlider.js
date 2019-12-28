import React from 'react'
import { CarouselProvider, Slider, Slide,Dot} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


class ImageSlider extends React.Component {
    render() {
        return(
          <div >
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block " height="700" src="/outfit-buy-1.png" alt="First slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block" height="700"src="/outfit-buy-2.png" alt="Second slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block" height="700" src="/outfit-buy-3.png" alt="Third slide" />
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
          </div>
        )
    }
}

export default ImageSlider
