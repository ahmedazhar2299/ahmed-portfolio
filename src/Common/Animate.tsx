import React from "react";
import { motion } from "framer-motion";
interface AnimatePropsInterface {
  type?: string;
  children: React.JSX.Element;
}

const Animate = (props: AnimatePropsInterface) => {
  const { type, children } = props;

  const getAnimation = () => {
    let animate = { transition: { duration: 1 } };
    if (type === "bottom") {
      animate["initial"] = { opacity: 0, y: -50 };
      animate["animate"] = { opacity: 1, y: 0 };
    } else if (type === "top") {
      animate["initial"] = { opacity: 0, y: 150 };
      animate["animate"] = { opacity: 1, y: 0 };
    } else if (type === "left") {
      animate["initial"] = { opacity: 0, x: -150 };
      animate["animate"] = { opacity: 1, x: 0 };
    } else if (type === "right") {
      animate["initial"] = { opacity: 0, x: 150 };
      animate["animate"] = { opacity: 1, x: 0 };
    }
    return animate;
  };

  return <motion.div {...getAnimation()}>{children}</motion.div>;
};

export default Animate;
