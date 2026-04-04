import React from 'react';
import Typewriter from 'typewriter-effect';

const MagicOcean = [
    'Welcome to My Developer Portfolio 🚀', 
    "Hi, I'm Ethmane.", 
    'Front end developer'
];

const DynamicTypewriter = () => {
  return (
    <Typewriter
      options={{
          strings: MagicOcean,
          autoStart: true,
          loop: true,
      }}
    />
  );
};

export default DynamicTypewriter;
