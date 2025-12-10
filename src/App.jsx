import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LandingPage from './LandingPage';
import BirthdayStory from './BirthdayStory';

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        {!hasStarted ? (
          <motion.div
            key="landing"
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-50"
          >
            <LandingPage onStart={() => setHasStarted(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="story"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <BirthdayStory />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
