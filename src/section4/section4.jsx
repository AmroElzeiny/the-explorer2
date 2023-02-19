import React, { useState } from 'react'
import './section4.css'
import arrow from '../images/section3-icon.svg';
import pic1 from '../images/section4-pic1.svg';
import pic2 from '../images/section4-pic2.svg';

const Section4 = () => {
    const posts = [
        {id:1,
         img:pic1,
         title:'5 Things to Know Before Buying Backpacking Gear',
         text:'Are you in the market for a new backpack, boots, tent, sleeping bag or other backpacking gear or apparel? How do you find something that’s just right for you? What should you be looking for? How much should you...'
        },
        {id:2,
         img: pic2,
         title:'5 Things to Know Before Buying Backpacking Gear',
         text:'Are you in the market for a new backpack, boots, tent, sleeping bag or other backpacking gear or apparel? How do you find something that’s just right for you? What should you be looking for? How much should you...'
        },
        {id:3,
         img:pic1,
         title:'5 Things to Know Before Buying Backpacking Gear',
         text:'Are you in the market for a new backpack, boots, tent, sleeping bag or other backpacking gear or apparel? How do you find something that’s just right for you? What should you be looking for? How much should you...'
        },
        {id:4,
         img: pic2,
         title:'5 Things to Know Before Buying Backpacking Gear',
         text:'Are you in the market for a new backpack, boots, tent, sleeping bag or other backpacking gear or apparel? How do you find something that’s just right for you? What should you be looking for? How much should you...'
        },
        {id:5,
         img:pic1,
         title:'5 Things to Know Before Buying Backpacking Gear',
         text:'Are you in the market for a new backpack, boots, tent, sleeping bag or other backpacking gear or apparel? How do you find something that’s just right for you? What should you be looking for? How much should you...'
        },
        {id:6,
         img: pic2,
         title:'5 Things to Know Before Buying Backpacking Gear',
         text:'Are you in the market for a new backpack, boots, tent, sleeping bag or other backpacking gear or apparel? How do you find something that’s just right for you? What should you be looking for? How much should you...'
        },
        {id:7,
         img:pic1,
         title:'5 Things to Know Before Buying Backpacking Gear',
         text:'Are you in the market for a new backpack, boots, tent, sleeping bag or other backpacking gear or apparel? How do you find something that’s just right for you? What should you be looking for? How much should you...'
        },
        {id:8,
         img: pic2,
         title:'5 Things to Know Before Buying Backpacking Gear',
         text:'Are you in the market for a new backpack, boots, tent, sleeping bag or other backpacking gear or apparel? How do you find something that’s just right for you? What should you be looking for? How much should you...'
        },
    ]

    const [index, setIndex] = useState(1)
    function right_button(){
        setIndex(index + 1);
        for(let i=0; i < posts.length ;i++){
            document.querySelectorAll('.section4-post')[i].style.left = `${-600 * index}px`;
            document.getElementById('left-button').style.display = 'flex'
            
        }

        if(index === 6){
                setIndex(1)
        }
        
    }
    function left_button(){
        setIndex(index - 1);
        for(let i=0; i < posts.length ;i++){
            document.querySelectorAll('.section4-post')[i].style.left = `${-600 * index}px`;
            
        }

        if(index === 1){
                setIndex(6)
        }
        
    }

  return (
    <div className="section4">
        <div className="section4-container">
            <div className="section4-title">Recently added</div>
            <a href='/' className="section4-posts" id='posts'>
                {posts.map((post)=><div className="section4-post" key={post.id} id='post'>
                    <img src={post.img} alt="img" className="section4-img" />
                    <p className="section4-post-title">{post.title}</p>
                    <p className="section4-text">{post.text}</p>
                    <a href='/' className="section4-icon-container">
                        Next Article
                        <img src={arrow} alt="img" className="section4-icon-img" />
                    </a>
                </div>)}
            </a>
            <div className="section4-right-button" onClick={()=>right_button()}></div>
            <div className="section4-left-button" id='left-button' onClick={()=>left_button()}></div>
        </div>
    </div>

  )
}

export default Section4