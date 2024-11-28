import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';

export function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen flex-col items-center justify-center p-4"
    >
      <Hero />
    </motion.main>
  );
}