import React from 'react';

import './Chef.css';
import {images} from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'> What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className="p__opensans"> If you are a chef, no matter how good a chef you are, it's not good cooking for yourself; the joy is in cooking for others - it's the same with music.</p>
        </div>
        <p className='p__opensans'> To me, there's no great chef without a great team.</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Salt</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
    
  </div>
);

export default Chef;
