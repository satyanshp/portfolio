import React from 'react';
import {  BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/satyanshp" rel="noreferrer" target="_blank"><AiFillGithub /></a>
      
    </div>
    <div>
      <a href="https://www.linkedin.com/in/satyansh-prajapati/" rel="noreferrer" target='_blank'><AiFillLinkedin /></a>
      
    </div>
    <div>
      <a href="https://www.instagram.com/satyansh.prajapati/" rel="noreferrer" target='_blank'><BsInstagram /></a>
      
    </div>
  </div>
);

export default SocialMedia;
