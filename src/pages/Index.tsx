
import React, { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SafePathAI = () => {
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");

  const shakeAnimation = {
    initial: { x: 0 },
    animate: {
      x: [0, -5, 5, -5, 5, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-mint-light flex flex-col items-center justify-center px-4 relative overflow-hidden md:overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl relative z-10"
      >
        {/* Stylish Upper Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative mb-8"
        >
          <motion.div 
            className="absolute -top-2 left-0 w-full h-1 bg-gradient-to-r from-mint/20 via-mint-dark to-mint/20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <h1 className="text-2xl font-medium text-mint-dark leading-tight pt-4">
            "No more fear,
            <br />
            just safe path
            <br />
            Ahead!"
          </h1>
        </motion.div>

        {/* Input Fields */}
        <div className="space-y-4">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover="animate"
            variants={shakeAnimation}
            className="relative"
          >
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter Your Location"
              className="w-full px-6 py-4 bg-mint-light/50 rounded-xl border-2 border-mint/20 focus:border-mint focus:outline-none transition-colors placeholder:text-mint-dark/60 text-mint-dark"
            />
            <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 text-mint-dark/60" />
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover="animate"
            variants={shakeAnimation}
            className="relative"
          >
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter Your Destination"
              className="w-full px-6 py-4 bg-mint-dark text-white rounded-xl border-2 border-transparent focus:border-mint-light/20 focus:outline-none transition-colors placeholder:text-white/60"
            />
            <ArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60" />
          </motion.div>
        </div>

        {/* AI Assistant Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col items-center"
        >
          <div className="bg-mint-light/50 rounded-xl p-4 mb-2 relative w-full">
            <div className="absolute w-4 h-4 bg-mint-light/50 transform rotate-45 -bottom-2 left-1/2 -ml-2" />
            <p className="text-mint-dark text-sm leading-relaxed">
              Hello! I'm your AI assistant, guiding you through the safest and fastest routes. Your safety is our priority- let's navigate with confidence!
            </p>
          </div>
          <p className="text-mint-dark/80 text-sm font-medium">SafePath AI</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SafePathAI;
