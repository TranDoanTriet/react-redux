import React from 'react';
import VideoHomePage from '../../assets/videoHomepage.mp4'
const Homepage = () => {
    return (
        <div className='homepage-container'>
            <video autoPlay muted loop>
                <source
                    src={VideoHomePage}
                    type="video/mp4"
                />
            </video>
        </div>
    );
};

export default Homepage;