'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-04" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
       <img
        src="/rooicon.png"
        alt="roo"
        className="w-[48px] h-[48px] object-contain"
      /> 
      <h2 className="font-extrabold text-center text-[24px] leading-[30.24px] text-orange-400">
        ROOS' NFT
      </h2>
      {/*<img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      /> */}
    </div>
  </motion.nav>
);

export default Navbar;
