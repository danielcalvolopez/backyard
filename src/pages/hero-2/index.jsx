import classes from "./Hero.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const Hero = () => {
  return (
    <div className={classes.background}>
      <Link href="/">
        <div className={classes.frame}>
          <div className={classes["image-container"]}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition}
              className={classes.image}
              src="/kiko-&-luis.png"
              alt=""
            />
          </div>
        </div>
      </Link>

      <div className={classes.text}></div>
    </div>
  );
};

export default Hero;
