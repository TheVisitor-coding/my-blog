'use client'

import { useScroll, motion, useSpring } from 'framer-motion'

export default function () {

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 90 })

    return ( 
        <>
            <motion.div style={{ scaleX: scaleX }} className='fixed top-0 left-0 w-full rounded-full h-2 bg-purple-800 z-50' />
        </>
     );
}

