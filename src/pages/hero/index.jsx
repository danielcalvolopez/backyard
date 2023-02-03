import classes from "./Hero.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const Hero = () => {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <Link href="/">
          <div className={classes["image-container"]}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition}
              className={classes.image}
              src="/kiko-&-luis.png"
              alt=""
            />
            <img className={classes.logo} src="backyard-logo.svg" alt="" />
          </div>
        </Link>
      </div>
      <div className={classes.text}>
        <p>backyard surf</p>
        <p>la zenia</p>
      </div>
    </div>
  );
};

export default Hero;
