import React, { useState, useEffect } from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const AlternatingTyping = ({ texts, delta = 100, pause = 300, onComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < texts.length) {
      let charIndex = 0;
      const ticker = setInterval(() => {
        setCurrentText(texts[index].substring(0, charIndex));
        charIndex++;

        if (charIndex > texts[index].length) {
          clearInterval(ticker);
          setTimeout(() => {
            setIndex(index + 1);
          }, pause);
        }
      }, delta);

      return () => clearInterval(ticker);
    } else {
      // Appel de onComplete lorsque toutes les animations sont terminées
      onComplete && onComplete();
    }
  }, [index, texts, delta, pause, onComplete]);

  return <span>{currentText}</span>;
};


const DynamicTyping = ({ toRotate,  delta = 50, maxWords }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [completedWords, setCompletedWords] = useState([]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);

      // Ajoute le mot terminé à la liste et limite sa taille
      setCompletedWords((prevWords) => {
        let newWords = [...prevWords, fullText];
        if (newWords.length > maxWords) {
          newWords = newWords.slice(-maxWords); // Garde uniquement les 'maxWords' derniers mots
        }
        return newWords;
      });

      // Vérifier si c'est le dernier mot de la liste
      if (i === toRotate.length - 1) {
        setLoopNum(0); // Réinitialiser l'index pour recommencer
        setCompletedWords([]); // Réinitialiser la liste des mots complétés
      } else {
        setLoopNum(loopNum + 1);
      }

    }
  };

return (
    <>
      <span>{text}</span>
      <ul>
        {completedWords.map((word, index) => (
          <li key={index}>{word}</li> // Affiche la liste des mots terminés
        ))}
      </ul>
    </>
  );
};

const Hero = () => {
  const [startParagraph, setStartParagraph] = useState(false);

  const handleAlternatingComplete = () => {
    setStartParagraph(true); // Démarre l'animation de DynamicTyping
  };

  return (
    <section className='relative w-full h-screen mx-auto' style={{ backgroundImage: 'url("src/assets/hero-bg.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-secondary`}>
            <AlternatingTyping texts={["console.log('Hello World')", "Hi, I'm Benjamin"]} onComplete={handleAlternatingComplete} />
          </h1>
          {startParagraph && (
            <div className={`${styles.heroSubText} mt-2`}>
              <DynamicTyping toRotate={["Web Developer", "Mobile Developer", "Coffee Maker", "Problem Solver", "Hard Worker", "Family Father", "Japanese Speaker"]} maxWords={7} />
            </div>
          )}
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <div className='flex flex-row gap-5 mt-5'>
            <a href='https://www.linkedin.com/in/benjamin-guiganton-607123272/' target='_blank' rel='noopener noreferrer' className='cursor-pointer'><img src='src/assets/linkdin.png' alt='linkdin' className='w-[40px]' /></a>
            <a href='https://github.com/OSAKA-BEN' rel='noopener noreferrer' target='_blank' className='cursor-pointer'><img src='src/assets/github.png' alt='github' className='w-[40px]' /></a>
            <a href='https://www.instagram.com/osaka_ben/' rel='noopener noreferrer' target='_blank' className='cursor-pointer'><img src='src/assets/instagram.png' alt='instagram' className='w-[40px]' /></a>
            <a href='src/assets/CV-Benjamin GUIGANTON-2023-NV.pdf' download='CV_Benjamin_Guiganton'><img src='src/assets/cv.png' alt='cv' className='w-[40px]' /></a>
          </div>
      </div>

    </section>   
  );
};

export default Hero;
