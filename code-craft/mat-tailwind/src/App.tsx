import { motion } from 'framer-motion';
import './App.css';

function App() {
  // Variants for animations
  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i = 1) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  return (
    <div className="App">
      <motion.div
        className="card"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={cardVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          ✨ Cool Features
        </motion.h1>

        <motion.ul className="features-list">
          {['Smooth Animations', 'Interactive UI', 'Responsive Design', 'Modern Look'].map((item, i) => (
            <motion.li
              key={item}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={listItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>✅</span> {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          className="cta-button"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: 'spring' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.button>
      </motion.div>
      <h1> Hi Chirag testin</h1>
    </div>
  );
}

export default App;