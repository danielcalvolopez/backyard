import { menuElements } from "@/utils/data/menuElements";
import { motion } from "framer-motion";
import AnimatedCharacters from "../UI/AnimatedCharacters";
import classes from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.2, delay: 0.15 }}
      style={{ pointerEvents: "auto" }}
      className={classes.navigation}
    >
      {menuElements.map((item, index) => {
        return (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            {item}
          </motion.p>
        );
      })}
    </motion.div>
  );
};

export default Navigation;
