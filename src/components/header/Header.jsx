import classes from "./Header.module.scss";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MenuButton } from "../UI/MenuButton";
import Navigation from "../navigation/Navigation";

const Header = () => {
  const [stickyHeader, setStickyHeader] = useState(false);

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setStickyHeader(window.pageYOffset > 30)
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
          initial={{ opacity: 0, x: -180 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        >
          <img src="/backyard-logo.svg" alt="" />
        </motion.div>

        <motion.div
          className={classes.burger}
          initial={{ opacity: 0, x: 180 }}
          animate={{ opacity: 1, x: 0 }}
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
