import React from 'react'
import hero from '../../assets/hero.jpg';
import css from './Hero.module.css';
import '../../styles/global.css';

const Hero = () => {
  return (
    <section className={css.hero}>
    <div className={css.container}>
    <div className={css.upperBlock}>
      <h1 >Take good care of your small pets</h1>
      <p>Choosing a pet for your home is a choice that is meant to enrich your life with immeasurable joy and tenderness./</p>
      </div>
      <div className={css.heroImageWrapper}>
      <img className={css.heroImage} src={hero} alt='someone with a dog'/></div>
      </div>
    </section>
  )
}

export default Hero
