import React from 'react'
import hero from '../../assets/hero.jpg';
import css from './Hero.module.css';
import '../../styles/global.css';
import Header from '../../components/Header/Header';

const Hero = () => {
  return (
    <section className={css.hero}>
    <div className='container'>
    <div className={css.upperBlock}>
    <Header />
    <div className={css.heroContent}>
      <h1 className={css.call}>Take good care of your small pets</h1>
      <p className={css.heroText}>Choosing a pet for your home is a choice that is meant to enrich your life with immeasurable joy and tenderness.</p>
     </div>
      </div>
      <div className={css.heroImageWrapper}>
      <img className={css.heroImage} src={hero} alt='someone with a dog'/></div>
      </div>
    </section>
  )
}

export default Hero
