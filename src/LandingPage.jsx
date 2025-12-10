import React from 'react';
import { motion } from 'framer-motion';

export default function LandingPage({ onStart }) {
    return (
        <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Decorations - Optimized with CSS Animations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-pink-400 text-6xl opacity-0 animate-float-particle will-change-transform"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 5 + 5}s`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    >
                        {Math.random() > 0.5 ? '❤️' : '✨'}
                    </div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="z-10 text-center"
            >
                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-pink-600 mb-8 drop-shadow-sm font-serif p-4"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    Hey, I have a surprise...
                </motion.h1>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onStart}
                    className="bg-white text-pink-500 font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:shadow-2xl transition ring-4 ring-pink-200"
                >
                    Click me! 🎁
                </motion.button>
            </motion.div>
        </div>
    );
}
