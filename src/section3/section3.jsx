import React from 'react';
import './section3.css';
import pic1 from '../images/section3-pic1.svg';
import arrow from '../images/section3-icon.svg';
import img1 from '../images/section3-right1.svg';
import img2 from '../images/section3-right2.svg';
import img3 from '../images/section3-right3.svg';

const section3 = () => {
    const posts = [
        {img: img1,
         title:'5 Things to Know Before Buying Backpacking Gear',
         date: 'Nov 20, 2022'
        },
        {img: img2,
         title:'5 Things to Know Before Buying Backpacking Gear',
         date: 'Nov 20, 2022'
        },
        {img: img3,
         title:'5 Things to Know Before Buying Backpacking Gear',
         date: 'Nov 20, 2022'
        }

    ]
  return (
    <div className="section3">
        <div className="section3-container">
            <div className="section3-left-container">
                <div className="section3-left-container-title">
                    Most popular
                </div>

                <img src={pic1} alt="img" className="section3-left-container-pic1" />

                <div className="section3-left-container-text-title">
                    5 Things to Know Before Buying Backpacking Gear
                </div>
                <div className="section3-left-container-text">
                    Are you in the market for a new backpack, boots, tent, sleeping bag or other backpacking gear or apparel? How do you find something that’s just right for you? What should you be looking for? How much should you spend? These...
                </div>
                <a href='/' className="section3-left-container-icon-container">
                    Next Article
                    <img src={arrow} alt="img" className="section3-left-container-icon-img" />
                </a>
            </div>
            <div className="section3-right-container">
                {posts.map((post)=>
                    <div className='section3-right-container-post'>
                        <img src={post.img} alt="img" className="section3-right-container-post-img" />
                        <div className="section3-right-container-post-texts">
                            <p className="section3-right-container-post-title">{post.title}</p>
                            <p className="section3-right-container-post-date">{post.date}</p>
                            <a href='/' className="section3-right-container-icon-container">
                                Next Article
                                <img src={arrow} alt="img" className="section3-right-container-icon-img" />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default section3