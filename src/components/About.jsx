import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  const [language, setLanguage] = useState('en'); // 'en', 'fr', 'jp' pour Anglais, Français, Japonais
  const [displayedText, setDisplayedText] = useState('');
  const intervalRef = useRef(null);  // Référence pour stocker l'identifiant de l'intervalle

  const texts = {
      fr:
         "Bonjour Amis Francophone!\n\nNationalité : Français.\nMétier : Développeur Web Full Stack.\nMission : Créer des sites et applications web.\nCompétences : Créatif, Organisé, Passionné, Curieux, Ouvert d'esprit, Adaptable, Autonome, Flexible, Honnête, Fiable, Responsable, Ponctuel.\nRésumé : Je suis un travailleur acharné qui aime apprendre. Toujours prêt à relever de nouveaux défis, je suis également un joueur d'équipe qui aime travailler avec les autres pour atteindre un objectif commun. Je suis toujours à la recherche de nouvelles opportunités d'apprendre et de grandir.",
      jp:
         '皆さん、こんにちは!\n\n国籍: フランス。\n職業: フルスタック Web 開発者。\n使命: Web サイトとアプリケーションの作成。\nスキル: 創造的、組織的、情熱的、好奇心旺盛、オープンマインド、順応性、自律性、柔軟性、正直、信頼でき、責任感があり、時間厳守です。\n概要: 私は学ぶことが大好きな努力家です。 私は常に新しいことに挑戦する準備ができており、共通の目標を達成するために他の人たちと協力することを楽しむチームプレイヤーでもあります。 私は常に学び、成長するための新しい機会を探しています。',
      en:
         'Oh ! Hello there !\n\nNationality : French.\nJob : Full Stack Web Developer.\nMission : Creating websites and web applications.\nSkills : Creative, Organized, Passionate, Curious, Open-minded, Adaptable, Autonomous, Flexible, Honest, Reliable, Responsible, Punctual.\nNote : I am a hard worker who likes learning. Always ready to take on new challenges, I am also a team player who enjoys working with others to achieve a common goal. I am always looking for new opportunities to learn and grow.',
    }

    const handleLanguageChange = (newLanguage) => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);  // Effacer l'intervalle actuel
      }
  
      let targetText = texts[newLanguage];
      let currentText = '';
      let index = 0;
  
      setDisplayedText('');
      setLanguage(newLanguage);
  
      intervalRef.current = setInterval(() => {
        currentText += targetText.charAt(index);
        setDisplayedText(currentText);
        index++;
  
        if (index > targetText.length) {
          clearInterval(intervalRef.current);
        }
      }, 5);
    };
  
    useEffect(() => {
      setDisplayedText(texts[language]); // Initialiser avec le texte de la langue sélectionnée
    }, [language]);
  
    // Nettoyage pour éviter les fuites de mémoire
    useEffect(() => {
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        <div className="flex gap-4">
          <img src="src/assets/france.png" alt="French" className="h-8 rounded cursor-pointer opacity-70" onClick={() => handleLanguageChange('fr')}/>
          <img src="src/assets/japon.png" alt="Japanese" className="h-8 rounded cursor-pointer opacity-70" onClick={() => handleLanguageChange('jp')} />
          <img src="src/assets/unitedkingdom.png" alt="English" className="h-8 rounded cursor-pointer opacity-70" onClick={() => handleLanguageChange('en')} />
        </div>
      </motion.div>


      <motion.div variants={fadeIn("up", "spring", 0, 0.75)} className="flex flex-col md:flex-row h-80">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-description text-justify text-[17px] max-w-3xl leading-[30px] md:w-2/3'
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {displayedText}
        </motion.p>
        <img src="src/assets/IMG_6949.jpeg" alt="profile" className="px-4 md:w-1/3"/>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");