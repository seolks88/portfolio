'use client'

import { useScroll, motion, useSpring, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ScrollProgressProps extends HTMLMotionProps<'div'> {
  className?: string
}

const ScrollProgress = ({ className, ...props }: ScrollProgressProps) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className={cn(
        'fixed left-0 right-0 z-50 h-1 origin-[0%] bg-primary',
        className
      )}
      style={{ scaleX }}
      {...props}
    />
  )
}

export default ScrollProgress
