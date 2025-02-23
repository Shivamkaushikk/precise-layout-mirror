
import React, { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SafePathAI = () => {
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");

  // Define the shake animation
  const shakeAnimation = {
    initial: { x: 0 },
    animate: {
      x: [0, -5, 5, -5, 5, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-mint-light flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl relative z-10"
      >
        {/* Header Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12 relative"
        >
          <div className="absolute right-0 top-0 transform translate-x-4 -translate-y-2">
            <svg width="40" height="40" className="text-mint-dark">
              <motion.path
                d="M2 35 Q 20 5, 38 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </svg>
          </div>
          <h1 className="text-2xl font-medium text-mint-dark leading-tight">
            "No more fear,
            <br />
            just safe path
            <br />
            Ahead!"
          </h1>
        </motion.div>

        {/* Input Fields */}
        <div className="space-y-4 mb-8">
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

        {/* AI Assistant Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-end gap-4 mt-12"
        >
          <div className="flex-1">
            <div className="bg-mint-light/50 rounded-xl p-4 mb-2 relative">
              <div className="absolute w-4 h-4 bg-mint-light/50 transform rotate-45 -bottom-2 left-8" />
              <p className="text-mint-dark text-sm leading-relaxed">
                Hello! I'm your AI assistant, guiding you through the safest and fastest routes. Your safety is our priority- let's navigate with confidence!
              </p>
            </div>
            <p className="text-mint-dark/80 text-sm font-medium ml-4">SafePath AI</p>
          </div>
          <motion.img
            src="/lovable-uploads/b273e24b-d12a-49d0-a52b-8e19965714f8.png"
            alt="AI Assistant"
            className="w-20 h-20 object-contain animate-float"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SafePathAI;
