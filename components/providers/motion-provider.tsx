'use client'

import { AnimatePresence, motion } from "framer-motion";

import Transition from "@/components/transition";

export default function MotionProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div className="h-full">
        <Transition />
        {children}
      </motion.div>
    </AnimatePresence>
  )
}