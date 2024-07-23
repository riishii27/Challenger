import { useState } from 'react';
import { AnimatePresence, motion, spring } from 'framer-motion';

import NewChallenge from './NewChallenge.jsx';

export default function Header() {
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

  function handleStartAddNewChallenge() {
    setIsCreatingNewChallenge(true);
  }

  function handleDone() {
    setIsCreatingNewChallenge(false);
  }

  return (
    <>
    <AnimatePresence>
      {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
    </AnimatePresence>

      <header id="main-header">
        <h1>Your Challenges</h1>
        <motion.button
          whileHover={{scale: 1.1, backgroundColor: '#8b11f0'}}
          transition={{type:'spring', stiffness:500, mass:8}}
          whileTap={{
            scale: 0.95,
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'
          }}
          onClick={handleStartAddNewChallenge} 
          className="button">
          Add Challenge
        </motion.button>
      </header>
    </>
  );
}
