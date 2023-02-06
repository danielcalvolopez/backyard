import classes from "./Header.module.scss";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { MenuButton } from "../UI/MenuButton";
import Navigation from "../navigation/Navigation";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.08], [1.3, 1]);

  const [stickyHeader, setStickyHeader] = useState(false);

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setStickyHeader(window.pageYOffset > 10)
      );
    }
  }, []);

  return (
    <div>
      <motion.div
        className={`${
          stickyHeader ? classes["sticky-header"] : classes.header
        }`}
      >
        <motion.div
          style={{ scale: scale }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <img className={classes.logo} src="/backyard-logo.svg" alt="" />
        </motion.div>

        <motion.div
          className={classes.burger}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
        >
          <MenuButton
            strokeWidth="2"
            width="30"
            height="17"
            isOpen={isOpen}
            onClick={() => setOpen((prev) => !prev)}
          />

          <AnimatePresence>{isOpen && <Navigation />}</AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
