import classes from "./Slideshow.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useRef } from "react";
import ArrowLeft from "../UI/ArrowLeft";
import ArrowRight from "../UI/ArrowRight";

const Slideshow = () => {
  const swiperArrowPrev = useRef(null);
  const swiperArrowNext = useRef(null);

  return (
    <div className={classes.container}>
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation={{
          prevEl: swiperArrowPrev.current,
          nextEl: swiperArrowNext.current,
        }}
        effect
        speed={800}
        slidesPerView={1}
        loop
        className={classes.swiper}
      >
        <SwiperSlide className={classes.slide}>
          <img src="/backyard-surf-kiko-riding.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img
            src="https://images.unsplash.com/photo-1674786272813-dd04d4843752?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img
            src="https://images.unsplash.com/photo-1675005921870-ccded2e54ce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4N3x8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <div ref={swiperArrowPrev}>
        <ArrowLeft className={classes.back} />
      </div>

      <div ref={swiperArrowNext}>
        <ArrowRight className={classes.forward} />
      </div>
    </div>
  );
};

export default Slideshow;
