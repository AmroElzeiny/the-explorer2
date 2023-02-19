import React, { useState } from 'react'
import './section5.css'

const Section5 = () => {
    const [isblue, setIsBlue] = useState(true);
    const [isred, setIsRed] = useState(true);

    function blue(){
        if(isblue){
            document.getElementById('tags-icon1').style.background = '#2CB3FF';
            setIsBlue((prev)=>!prev)}else{
                document.getElementById('tags-icon1').style.background = 'none';
                setIsBlue((prev)=>!prev)
            }

    }
    function red(){
        if(isred){
            document.getElementById('tags-icon2').style.background = '#FF2C2C';
            setIsRed((prev)=>!prev);}else{
                document.getElementById('tags-icon2').style.background = 'none';
                setIsRed((prev)=>!prev);

            }
    }
  return (
    <div className="section5">
        <div className="section5-background">
        <div className="section5-container">
            <div className="title">
                Subscribe to our <span>newsletter</span>
            </div>
            <div className="text">
                And receive weekly fresh articles on your favorite oudoor topics
            </div>
            <div className="tags-container">
                <div className="tags-title">Choose your topics</div>
                <div className="tags-icons">
                    <div className="tags-icon1" id='tags-icon1' onMouseEnter={isblue? ()=> document.getElementById('tags-icon1').style.color = '#2CB3FF' :null} onMouseLeave={()=> document.getElementById('tags-icon1').style.color = '#FFFFFF'} onClick={()=>blue()}>Hiking</div>
                    <div className="tags-icon2" id='tags-icon2' onMouseEnter={isred? ()=> document.getElementById('tags-icon2').style.color = '#FF2C2C' :null} onMouseLeave={()=> document.getElementById('tags-icon2').style.color = '#FFFFFF'} onClick={()=>red()}>Fishing</div>
                </div>
            </div>
            <form>
                <label className="submit-container">
                    <input type="email" placeholder='Your email' required />
                    <button type='submit'>submit</button>
                </label>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Section5