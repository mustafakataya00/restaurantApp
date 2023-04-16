import React from 'react';

import './Header.css';
import {images} from '../../constants';
import {SubHeading} from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new Flavour" />
      <h1 className='app__header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Here You have The Best Restaurant You Can Ever Visit , Don't Hesitate To Order From Us .
      <br />
      Your are Welcome!</p>
      <button className='custom__button'>Explore More</button>

    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} />
    </div>
  </div>
);

export default Header;
