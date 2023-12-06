import React, { useEffect, useState } from "react";

const useTextScramble = (text, speed = 100) => {
  const [scrambledText, setScrambledText] = useState('');
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  let queue = [];

  useEffect(() => {
    if (text) {
      queue = text.split('');
      let currentText = queue.map(() => chars[Math.floor(Math.random() * chars.length)]);

      let interval = setInterval(() => {
        queue.forEach((char, index) => {
          if (Math.random() < 0.3 || currentText[index] === char) {
            currentText[index] = char;
          } else {
            currentText[index] = chars[Math.floor(Math.random() * chars.length)];
          }
        });

        setScrambledText(currentText.join(''));

        if (!currentText.some((char, index) => char !== queue[index])) {
          clearInterval(interval);
        }
      }, speed);
    }
  }, [text, speed]);

  return scrambledText;
};


const Footer = () => {
  const phrases = [
    'Osaka-Ben@Copyright 2023',
    'Sooner or Later',
    'I wanna be the very best',
    'Like no coder ever was',
    'To build them is my real test',
    'To debug them is my cause.',
    'I will travel across the web',
    'Searching far and wide',
    'Teach programs to understand',
    'The power that s inside',
    'Developer, gotta code em all!',
  ];

  const [counter, setCounter] = useState(0);
  const scrambledText = useTextScramble(phrases[counter]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounter((c) => (c + 1) % phrases.length);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [counter, phrases.length]);

  return (
    
    <div className="text flex justify-center text-lg">{scrambledText}</div>
    
  );
};

export default Footer;
