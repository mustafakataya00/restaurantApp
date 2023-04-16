import React from 'react';

import './AboutUs.css';
import {images} from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="LetterG" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'> About Us</h1>
        <img src={images.spoon} alt="About_sppon" className='spoon__img' />
        <p className='p__opensans'>Since our modest beginnings in 2005 with a little space in Toronto's stylish Yorkville locale, Gericht's development has been enlivened with the energy to cook and serve solid, Indian-roused takeout food. In contrast to other Indian eateries, Gericht was made with the explicit expectation to appear as something else. We realize numerous individuals love Indian sustenance, yet a large number of them loathe or are unconscious of the regularly unfortunate fixings that make run-of-the-mill Indian nourishment taste so great. Our menu highlights things that utilize the sound and fragrant flavors, however, forget the stuffing ghee, spread, oil, and overwhelming cream. Gericht has developed to incorporate four superb takeout areas in Toronto, with additional to come sooner rather than later. Our group takes pride in the way that we can furnish our new and faithful clients with extraordinary tasting Indian-roused nourishment that is not normal for that some other Indian eateries you visit.</p>
        <button type="button" className='custom__button'> Know More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'> Our History</h1>
        <img src={images.spoon} alt="_spoon" className='spoon__img' />
        <p className='p__opensans'>Since our modest beginnings in 2005 with a little space in Toronto's stylish Yorkville locale, Gericht's development has been enlivened with the energy to cook and serve solid, Indian-roused takeout food. In contrast to other Indian eateries, Gericht was made with the explicit expectation to appear as something else. We realize numerous individuals love Indian sustenance, yet a large number of them loathe or are unconscious of the regularly unfortunate fixings that make run-of-the-mill Indian nourishment taste so great. Our menu highlights things that utilize the sound and fragrant flavors, however, forget the stuffing ghee, spread, oil, and overwhelming cream. Gericht has developed to incorporate four superb takeout areas in Toronto, with additional to come sooner rather than later. Our group takes pride in the way that we can furnish our new and faithful clients with extraordinary tasting Indian-roused nourishment that is not normal for that some other Indian eateries you visit.</p>
        <button type="button" className='custom__button'> Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
