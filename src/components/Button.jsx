import React from 'react'
import { motion } from 'framer-motion';

function Button({ title, id, rightIcon, leftIcon, containerClass, }) {
  return (
    <>
      <motion.button id={id} whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.93 }} transition={{ type: "spring", stiffness: 100, damping: 20, }} className={`group z-10 w-fit flex cursor-pointer gap-1 overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>{leftIcon} <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'><div className="">{title}</div></span> {rightIcon}</motion.button>
    </>
  )
}

export default Button