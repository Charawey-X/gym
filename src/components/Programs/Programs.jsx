import React from 'react';
import './Programs.css';
import Dumbell from '../../assets/dumbell.svg';
import Right from '../../assets/rightArrow.png';
import Run from '../../assets/running.svg';
import Flame from '../../assets/flame.svg';
import Heart from '../../assets/heartHealth.svg';

const Programs = () => {
  return (
    <div className='programs' id='programs'>
        <div className='programs-header'>
            <h2>Explore Our Programs</h2>
        </div>
        <section className='program-list'>
            <div className='program'>
                <img src={Dumbell} alt="" />
                <h3>Strength Training</h3>
                <p>This program aims at improving your strength & body building.</p>
                <div className='join'>
                    <p>Join Now</p>
                    <img src={Right} alt=""/>
                </div>
            </div>
            <div className='program'>
                <img src={Run} alt="" />
                <h3>Cardio Training</h3>
                <p>This training involves sequential moves in sets of 20 or 30 minutes.</p>
                <div className='join'>
                    <p>Join Now</p>
                    <img src={Right} alt=""/>
                </div>
            </div>
            <div className='program'>
                <img id='flame' src={Flame} alt="" />
                <h3>Fat Burning</h3>
                <p>This program is suitable for getting rid of fat & losing weight.</p>
                <div className='join'>
                    <p>Join Now</p>
                    <img src={Right} alt=""/>
                </div>
            </div>
            <div className='program'>
                <img id='heart' src={Heart} alt="" />
                <h3>Health Fitness</h3>
                <p>This training is designed for those who aim for general body fitness.</p>
                <div className='join'>
                    <p>Join Now</p>
                    <img src={Right} alt=""/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Programs