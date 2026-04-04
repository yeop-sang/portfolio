import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { ScrollToTop } from "./ScrollToTop";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Root() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen"
        style={{ 
          backgroundColor: '#0F0F0F',
          fontFamily: 'var(--font-body)',
        }}
      >
        <Navigation />
        <Outlet />
        <ScrollToTop />
      </motion.div>
    </>
  );
}
