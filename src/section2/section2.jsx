import React from 'react'
import './section2.css'

const Section2 = () => {
  return (
    <div className="section2">
        <div className="section2-container">
            <div className="left-section">
                <p className="left-section-title">
                    About blog
                </p>
                <p className="left-section-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ac viverra arcu semper non pharetra pulvinar risus, tincidunt. Morbi curabitur ultrices vehicula vestibulum non non. Non malesuada augue vitae eu in leo vitae. Nam<br/><br/>
                    Consequat diam dignissim nunc bibendum aliquam amet eleifend amet, sit. Consequat mi amet molestie est. Pellentesque vitae, faucibus fermentum integer duis a tortor gravida. Maecenas fermentum laoreet est orci enim nibh curabitur. Feugiat lobortis volutpat lacus habitant purus amet. Varius itant 
                </p>
                <button className="left-section-button">
                    Read Articles
                </button>
            </div>
            <div className="right-section">
                <div className="fishing-container">
                    <div className="fishing">Fishing</div>
                </div>

                <div className="camping-container">
                    <div className="camping">Camping</div>
                </div>

                <div className="hunting-container">
                    <div className="hunting">Hunting</div>
                </div>

                <div className="hiking-container">
                    <div className="hiking">Hiking</div>
                </div>
                
                <div className="gear-container">
                    <div className="gear">Gear</div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Section2