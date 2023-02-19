import React, { useEffect, useState } from 'react'
import './section1.css'
import pic2 from '../images/pic2.svg'
import section1_pic from '../images/section1_pic.svg'

const Section1 = () => {
  const items = {
    pictures: [pic2, pic2, pic2, pic2, pic2],
    title:['5 Things to Know Before Buying Backpacking Gear', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', '5 Things to Know Before Buying Backpacking Gear', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.','5 Things to Know Before Buying Backpacking Gear'],
    text:['Finding the gear that performs well and that you’ll be happy with really comes down to following a simple thought...', 'Finding the gear that performs well and that you’ll be happy with really comes down to following a simple thought...', 'Finding the gear that performs well and that you’ll be happy with really comes down to following a simple thought...', 'Finding the gear that performs well and that you’ll be happy with really comes down to following a simple thought...', 'Finding the gear that performs well and that you’ll be happy with really comes down to following a simple thought...',]
  }

  const [index, setIndex]= useState(0)
  const [finalPics, setFinalPics] = useState([])
  const [title, setTitle]= useState([])
  const [selectedDot, setSelectedDot] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(currentIndex => {
        if (currentIndex + 1 >= items.pictures.length) {
          return 0;
        } else {
          return currentIndex + 1;
        }
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFinalPics(items.pictures.slice(index, index + 3));
    setTitle(items.title.slice(index,index + 3));
    setSelectedDot(index);
  }, [index]);

  let dots_map = items.pictures.map((_, i) => (
    <div
      className='dot'
      style={i === selectedDot ? {backgroundColor: '#9EE800', width: '50px', transitionDuration:'0.1s'} : {}}
      onClick={() => {
        setIndex(i);
        setSelectedDot(i);
      }}
      key={i}
    />
  ));
  
  return (
    <div className="section1">
      <div className="section1-container">

      <div className="right-container">
        <div className="right-title">
          Australia's largest <span>outdoor</span> blog
        </div>
        <img src={section1_pic} alt='img' className='section1-banner'/>
        <button className='section1-button' id='#section2'></button>
      </div>












        <div className="left-container">
        <div className="posts">
          {finalPics.map((pic, i) => (
                <div className={`post${i}`}>
                  <div className="tags">
                    <p className="tag1">
                      article
                    </p>
                    <p className="tag2">
                      hiking
                    </p>
                  </div>
                  <div className="post-title">
                    {title[i]}
                  </div>
                  <div className="post-text">
                    {items.text[i]}
                  </div>
                  <img alt='img' src={finalPics[i]} key={i} className={`pic${i}`} />
                </div>
          ))}
            </div>
          <div className="dots-container"> {dots_map} </div>

        </div>
      </div>
    </div>
  );
};

export default Section1;

