'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import { gotoLink } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-blue-400">
          Enter the Safari
        </h4>

        <button type="button" className="flex items-center h-fit  py-4 px-6 bg-orange-400 rounded-[32px] gap-[12px]">
          <a href="https://discord.gg/83QwCKHy" target="_blank" rel="noreferrer" >
          <img
            src="/rooicon.png"
            alt="roosimg"
            className="w-[24px] h-[24px] object-contain"
           
          />
          <span className="font-normal text-[17px] text-white">
            Hop In
          </span>
          </a>
        </button>
      </div>



      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-black opacity-15" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-orange-400">
            ROOS
          </h4>
          <p className="font-normal text-[18px] text-orange-600 opacity-40">
            Copyright © 2023 ROOSNFT. All rights reserved.
          </p>

          
          <div className="flex gap-4">
            {socials.map((social) => (
            <a href="https://twitter.com/RoosNFTs" target="_blank" rel="noreferrer" >
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[45px] h-[45px] object-contain cursor-pointer rounded-lg"
              />
              </a>
              
          
              
              
              

            ))}
          </div>
          
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
