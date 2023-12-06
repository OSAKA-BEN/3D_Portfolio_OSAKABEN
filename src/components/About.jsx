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
         "J'ai travaillé comme chef de projet dans le domaine de la construction navale. Même si j'ai apprécié ce travail, j'ai toujours été intéressé par le monde de la programmation informatique, j'ai donc pris la décision de passer au développement Web et de m'y consacrer. J'ai suivi un programme de formation intensif de six mois et je suis depuis devenu un développeur qui aime créer et apprendre de nouvelles choses. \n\nAimant les défis et la créativité, j'ai toujours envie d'apprendre de nouvelles choses et de trouver des solutions inventives. Je pense que mon expérience en gestion de projet m'a apporté des compétences précieuses que je peux appliquer à mon travail de développeur, notamment de solides compétences en communication et en organisation. Dans l’ensemble, je suis ravi de continuer à développer et à développer mes compétences en tant que développeur dans ce domaine passionnant et dynamique.",
      jp:
         '私は以前、造船分野でプロジェクトマネージャーとして働いていました。 この仕事は楽しかったのですが、以前からコンピュータープログラミングの世界に興味があったため、Web開発に転向し、Web開発に専念することを決意しました。 私は 6 か月の集中トレーニング プログラムを修了し、それ以来、新しいものを作成したり学習したりすることを楽しむ開発者になりました。\n\n 挑戦と創造性を楽しむ人として、私は常に新しいことを学び、独創的な解決策を考え出すことに熱心です。 プロジェクト管理の経歴が、強力なコミュニケーション能力や組織力など、開発者としての仕事に応用できる貴重なスキルを私に与えてくれたと信じています。 全体として、私はこのエキサイティングでダイナミックな分野で開発者として成長し、スキルを拡大し続けることに興奮しています。',
      en:
         'I used to work as a project manager in the field of naval construction. While I enjoyed this work, I had always been interested in the world of computer programming, so I made the decision to transition to web development and devote myself in it. I completed an intensive six-month training program and have since become a developper who enjoy creating and learning new things. \n\nAs someone who enjoys challenges and creativity, I am always eager to learn new things and come up with inventive solutions. I believe my background in project management has given me valuable skills that I can apply to my work as a developer, including strong communication and organization skills. Overall, I am excited to continue growing and expanding my skills as a developer in this exciting and dynamic field.',
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