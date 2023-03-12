import React from 'react';
import github from '../../images/github-logo.png';
import linkedin from '../../images/linkedin-logo.png';
import IconCircle from '../IconCircle/IconCircle';

import './IconsComponent.css';


const IconsComponent = () => {
  return (
    <div className='icons_cnt'>
      <div className='icon-div'>
            <div className='about-animation-div--icon'>
                <IconCircle
                    name={'Github'}
                    image={github} 
                    link='https://github.com/agustinfraile'
                />
            </div>
        </div>

        <div className='icon-div'>
            <div className='about-animation-div--icon'>
                <IconCircle 
                    name={'Linkedin'}
                    image={linkedin} 
                    link='https://www.linkedin.com/in/agustinfraile/'
                />
            </div>
        </div>
    </div>
  )
}

export default IconsComponent