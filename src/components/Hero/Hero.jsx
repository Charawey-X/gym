import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import Barbels from '../../assets/barbels.png';


const Hero = () => {
  return (
    <div className="hero" id='hero'>
        <div className='left'>
            <Header></Header>
            <section className='best'>
                <div></div>
                <span>THE BEST FITNESS CLUB IN TOWN</span>
            </section>
            <section className='hero-text'>
                <div>
                    <span className='stroke-text'>SHAPE </span>
                    <span>YOUR</span>
                </div>
                <div>
                    <span>IDEAL BODY</span>
                </div>
                <div>
                    <span>We will help you to shape your ideal body & build a healthy lifestyle</span>
                </div>
            </section>
            <section className='figures'>
                <div>
                    <span id='figure1'>+100</span>
                    <span>EXPERT COACHES</span>
                </div>
                <div>
                    <span id='figure2'>+978</span>
                    <span>MEMBERS JOINED</span>
                </div>
                <div>
                    <span id='figure3'>+50</span>
                    <span>FITNESS PROGRAMS</span>
                </div>
            </section>
            <section className='hero-buttons'>
                <div><button className='hbtn1 btn' type='button'>Get Started</button></div>
                <div><button className='hbtn2 btn' type='button'>Learn More</button></div>
            </section>
        </div>
        <div className='right'>
            <img src={Barbels} alt =""/>
        </div>
    </div>
  )
}

export default Hero