import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import "swiper/css";
import "swiper/css/free-mode";


function Slidebar() {
  return (
    <div className='Slider'>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={FreeMode}
        className="mySwiper"
        slidesPreView={5}
      >
        <SwiperSlide>
          <div className='card-container'>
            <video src='./table1.mp4' width="50%" loop muted playsInline autoPlay />
            <div className='card-content'>
              <h1>SMART TABLE</h1>
              <p>AXL Smart Tables are designed for both  business and family use. With its versatile designs, AXL can fit in any environment you choose.
                The Smart Coffee Table share the same features of the smart mirrors and more. My personal  favorite feature is to play virtual board games.
              </p>
              <a className='mybtn' href='/Store'>Check Out Store</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card-container'>
            <video src='./smirror.mp4' width="50%" loop muted playsInline autoPlay />
            <div className='card-content'>
              <h1>SMART MIRROR</h1>
              <p>AXL Smart Tables are designed for both  business and family use. With its versatile designs, AXL can fit in any environment you choose.
                The Smart Coffee Table share the same features of the smart mirrors and more. My personal  favorite feature is to play virtual board games.
              </p>
              <a className='mybtn' href='/Store'>Check Out Store</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card-container'>
            <video src='./table2.mkv' width="50%" loop muted playsInline autoPlay />
            <div className='card-content'>
              <h1>SMART TABLE</h1>
              <p>AXL Smart Tables are designed for both  business and family use. With its versatile designs, AXL can fit in any environment you choose.
                The Smart Coffee Table share the same features of the smart mirrors and more. My personal  favorite feature is to play virtual board games.
              </p>
              <a className='mybtn' href='/Store'>Check Out Store</a>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Slidebar;