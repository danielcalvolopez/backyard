import { menuElements } from "@/utils/data/strings";
import { motion } from "framer-motion";
import classes from "./Navigation.module.scss";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Navigation = () => {
  return (
    <motion.div
      key="box"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.2,
        delay: 0.15,
        ease: "easeIn",
      }}
      exit={{ opacity: 0 }}
      className={classes.navigation}
    >
      {menuElements.map(({ text, transition, initial, exit }) => (
        <motion.p
          key={text}
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          exit={exit}
        >
          {text}
        </motion.p>
      ))}

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className={classes.socials}
        initial={{ opacity: 0, y: 140 }}
        exit={{ opacity: 0, y: 90, transition: { duration: 0.4 } }}
      >
        <AiFillFacebook className={classes.fb} size={30} />
        <AiOutlineInstagram className={classes.ig} size={30} />
      </motion.div>
    </motion.div>
  );
};

export default Navigation;
