"use client";

import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Credits from './credits';
import Image from 'next/image'
import styles from './page.module.scss'
import mobileIllustration from '../public/illustrationMobile.svg';
import desktopIllustration from '../public/illustrationDesktop.svg';
import listIcon from '../public/icon-list.svg';
import succesIcon from '../public/icon-success.svg';

export default function Page() {

  const [valorInput, setValorInput] = useState(''); //input value
  const [inputValido, setInputValido] = useState(true); //input validity
  const [displayMenu, setDisplayMenu] = useState(false); //success menu change

  const handleChange = (valor) => {
    setValorInput(valor.target.value);
  };

  const handleSubmit = (event) => { 
    event.preventDefault();

    // Verificar se o valor do input é válido
    if (valorInput === '') {
      setInputValido(false);
    } else {
      setInputValido(true);
      setDisplayMenu(true)
      // Resto da lógica de submissão do formulário
    }
  };

  const reloadSection = () => {  //reload when click 'desmiss message' button
    setDisplayMenu(false)
  }
  
  const [itemVariants, setItemVariants] =  useState({ //buttons animation responsivity
    hover: {scale : 1.1},
    tap: {scale : 0.9},
    })

    useEffect(()=>{ //buttons animation responsivity
      if(window.innerWidth <= 600){
        setItemVariants(false)
      } else{}
    })


  return (
    <motion.section 
    className={styles.section}
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2
      }}
    >

      
        <div className={styles.images} style={{display: displayMenu ? 'none' : 'flex'}}>
          <Image
          src={mobileIllustration}
          alt='Illustration'
          className={styles.mobileImage} />

          <Image
          src={desktopIllustration}
          alt='Illustration' 
          className={styles.desktopImage} />
        </div>

      <div className={styles.textContent} style={{display: displayMenu ? 'none' : 'flex'}}>

        <div className={styles.text}>

          <div className={styles.header}>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
          </div>

          <div className={styles.list}>
            <Image
            src={listIcon}
            alt='ListIcon' />
            <p>Product discovery and building what matters</p>
          </div>

          <div className={styles.list}>
          <Image
            src={listIcon}
            alt='ListIcon' />
            <p>Measuring to ensure updates are a succes</p>
          </div>

          <div className={styles.list}>
            <Image
            src={listIcon}
            alt='ListIcon' />
            <p>And much more!</p>
          </div>

        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <span>Email address</span>
          <input type="email" name="email" id='email' onChange={handleChange} className={inputValido ? styles.valido : styles.invalido} placeholder='email@company.com' />
          {!inputValido && ( 
        <label htmlFor='email' className="mensagem-erro">Valid email required</label>  
        )}
          <motion.input type='submit' value='Subscribe to monthly newsletter'  
          className={styles.submitButton}
          variants={itemVariants}
          whileHover='hover'
          whileTap='tap'
          transition={{ type: "spring", stiffness: 200, damping: 5 }}
          />
        </form>
        
      </div> 
      
      <div className={displayMenu ? styles.success : styles.successToggle}>
        <div className={styles.subscribe}>
          <Image
            src={succesIcon}
            alt='Success Aplied'
          />
          <h2>Thanks for subscribing!</h2>
          <p>A confirmation has been sent to <strong>{valorInput}</strong>. Please open it and click the button inside to confirm your subscription</p>
        </div>
        <motion.button
        onClick={reloadSection}
        variants={itemVariants}
        whileHover='hover'
        whileTap='tap'
        transition={{ type: "spring", stiffness: 200, damping: 5 }}
        >Dismiss message
        </motion.button>
      </div> 

      <Credits />
    </motion.section>
  )
}
