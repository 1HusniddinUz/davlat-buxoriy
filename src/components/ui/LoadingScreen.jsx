import { motion } from "framer-motion";
import "../../assets/LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <motion.div
        className="loading-circle"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
      />
      <motion.h2
        className="loading-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Bukhara Miniaturist
      </motion.h2>
    </div>
  );
};

export default LoadingScreen;
