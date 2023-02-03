import { useEffect, useRef, useState } from "react";
import ArrowLeft from "../UI/ArrowLeft";
import ArrowRight from "../UI/ArrowRight";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import slideshowImages from "@/utils/data/slideshowImages";
import classes from "./Slideshow.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Slideshow = () => {
  const useWindowSize = () => {
    const [screenWidth, setScreenWidth] = useState(undefined);

    useEffect(() => {
      const handleScreenWidth = () => {
        setScreenWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleScreenWidth);

      handleScreenWidth();

      return () => {
        window.removeEventListener("resize", handleScreenWidth);
      };
    }, []);
    return screenWidth;
  };

  const width = useWindowSize();

  // const swiperArrowPrev = useRef(null);
  // const swiperArrowNext = useRef(null);

  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, slideshowImages.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [paginate]);

  return (
    <AnimatePresence initial={false} custom={direction}>
      <div className={classes.container}>
        <div className={classes.swiper}>
          <motion.img
            className={classes.image}
            key={page}
            src={
              width > 736
                ? slideshowImages[imageIndex]?.url
                : slideshowImages[imageIndex]?.cropUrl
            }
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 35 },
              opacity: { duration: 0.5 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </div>

        {/* <div ref={swiperArrowPrev} onClick={() => paginate(1)}>
          <ArrowLeft className={classes.back} />
        </div>

        <div ref={swiperArrowNext} onClick={() => paginate(-1)}>
          <ArrowRight className={classes.forward} />
        </div> */}
      </div>
    </AnimatePresence>
  );
};

export default Slideshow;
