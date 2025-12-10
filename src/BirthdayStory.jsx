import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

import firstDateImg from "./assets/firstdate.jpg";
import coffeeImg from "./assets/coffee.jpg";
import dateImg from "./assets/date.jpg";
import gymImg from "./assets/gym.jpg";
import chessImg from "./assets/chess.jpg";
import poolImg from "./assets/pool.jpg";
import christmasImg from "./assets/christmas.jpg";
import homeImg from "./assets/home.jpg";
import funnyImg from "./assets/funny.jpg";
import viewImg from "./assets/view.jpg";
import kissImg from "./assets/kiss.jpg";
import birthdaySong from "./assets/happy-birthday.mp3";

export default function BirthdayStory() {
    const [events] = useState([
        {
            id: 1,
            date: "2023-04-10",
            title: "The Beginning",
            subtitle: "First Date",
            image: firstDateImg,
            text: "Where it all started. The butterflies, the nervous laughter, and the spark that changed everything.",
        },
        {
            id: 2,
            date: "2023-05-15",
            title: "Coffee Dates",
            subtitle: "Warm Conversations",
            image: coffeeImg,
            text: "Just us, good coffee, and endless conversations about everything and nothing.",
        },
        {
            id: 3,
            date: "2023-08-20",
            title: "Adventures Together",
            subtitle: "Making Memories",
            image: dateImg,
            text: "Every outing becomes a special memory when we're together.",
        },
        {
            id: 4,
            date: "2023-10-12",
            title: "Gym Partners",
            subtitle: "Stronger Together",
            image: gymImg,
            text: "Motivating each other to be our best selves, one workout at a time.",
        },
        {
            id: 5,
            date: "2023-11-30",
            title: "Chess Battles",
            subtitle: "Mind Games",
            image: chessImg,
            text: "Strategic moves, playful rivalry, and always learning from each other.",
        },
        {
            id: 6,
            date: "2023-12-25",
            title: "Christmas Joy",
            subtitle: "Festive Season",
            image: christmasImg,
            text: "Celebrating our first Christmas together, wrapped in warmth and love.",
        },
        {
            id: 7,
            date: "2024-02-14",
            title: "Poolside Relaxing",
            subtitle: "Sun & Fun",
            image: poolImg,
            text: "Soaking up the sun and enjoying the perfect getaway moments.",
        },
        {
            id: 8,
            date: "2024-06-01",
            title: "Home Sweet Home",
            subtitle: "Our Sanctuary",
            image: homeImg,
            text: "Building our cozy space, filled with love and laughter.",
        },
        {
            id: 9,
            date: "2024-08-15",
            title: "Goofy Moments",
            subtitle: "Just Being Us",
            image: funnyImg,
            text: "Because love is also about being silly and laughing until our stomachs hurt.",
        },
        {
            id: 10,
            date: "2024-10-05",
            title: "Beautiful Views",
            subtitle: "Sky Rooftop",
            image: viewImg,
            text: "Admiring the view, but knowing the best view is right next to me.",
        },
        {
            id: 11,
            date: "2024-10-05",
            title: "Beautiful Views",
            subtitle: "Sky Rooftop",
            image: viewImg,
            text: "Admiring the view, but knowing the best view is right next to me.",
        },
        {
            id: 12,
            date: "2024-10-05",
            title: "Beautiful Views",
            subtitle: "Sky Rooftop",
            image: viewImg,
            text: "Admiring the view, but knowing the best view is right next to me.",
        },
        {
            id: 13,
            date: "2024-10-05",
            title: "Beautiful Views",
            subtitle: "Sky Rooftop",
            image: viewImg,
            text: "Admiring the view, but knowing the best view is right next to me.",
        },
        {
            id: 14,
            date: "2024-10-05",
            title: "Beautiful Views",
            subtitle: "Sky Rooftop",
            image: viewImg,
            text: "Admiring the view, but knowing the best view is right next to me.",
        },
        {
            id: 20,
            date: "2025-02-14",
            title: "Forever Us",
            subtitle: "Sealed with a Kiss",
            image: kissImg,
            text: "Celebrating our love, today and always.",
        },
    ]);

    const [active, setActive] = useState(null);
    const [playMusic, setPlayMusic] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (playMusic) audioRef.current?.play();
        else {
            audioRef.current?.pause();
            audioRef.current && (audioRef.current.currentTime = 0);
        }
    }, [playMusic]);

    const sorted = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 via-red-50 to-pink-100 py-12 px-4 md:px-12 font-serif text-gray-900 relative">
            {/* Decorative Hearts - Optimized with CSS Animations */}
            <div className="fixed top-0 left-0 h-full w-24 flex flex-col justify-around items-center opacity-40 pointer-events-none z-0 text-center">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                        key={`left-${i}`}
                        className="text-6xl text-pink-300 animate-float-left will-change-transform"
                        style={{ animationDelay: `${i * 1.5}s` }}
                    >
                        ♥
                    </div>
                ))}
            </div>
            <div className="fixed top-0 right-0 h-full w-24 flex flex-col justify-around items-center opacity-40 pointer-events-none z-0 text-center">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                        key={`right-${i}`}
                        className="text-6xl text-pink-300 animate-float-right will-change-transform"
                        style={{ animationDelay: `${i * 2}s` }}
                    >
                        ♥
                    </div>
                ))}
            </div>

            {showConfetti && <Confetti recycle={false} numberOfPieces={300} />}
            <div className="max-w-4xl mx-auto relative z-10">
                <header className="flex flex-col md:flex-row items-center justify-between mb-12 text-center md:text-left gap-6">
                    <div>
                        <h1 className="text-5xl font-extrabold tracking-tight text-pink-900 drop-shadow-sm">Our Story</h1>
                        <p className="mt-2 text-pink-700 text-lg">Two years of memories — celebrated elegantly.</p>
                    </div>
                    <div className="flex items-center gap-3 justify-center md:justify-end">
                        <button
                            onClick={() => setPlayMusic((s) => !s)}
                            className="px-4 py-2 bg-white ring-1 ring-pink-200 rounded-full shadow-md text-sm hover:scale-105 transform transition text-pink-600 font-medium"
                        >
                            {playMusic ? "Pause music" : "Play music"}
                        </button>
                        <button
                            onClick={() => {
                                setShowConfetti(true);
                                setTimeout(() => setShowConfetti(false), 6000);
                            }}
                            className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm ring-1 ring-pink-200 shadow-md hover:scale-105 transform transition font-medium"
                        >
                            🎉 Surprise
                        </button>
                    </div>
                </header>

                <main className="space-y-16">
                    {sorted.map((ev, idx) => (
                        <motion.article
                            key={ev.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="bg-white/90 rounded-3xl p-8 shadow-xl ring-1 ring-pink-100 flex flex-col items-center text-center hover:shadow-2xl transition-shadow"
                        >
                            <img
                                src={ev.image}
                                alt={ev.title}
                                loading="lazy"
                                className="w-full max-w-md h-auto object-cover rounded-xl shadow-md border-4 border-white will-change-transform"
                            />
                            <div className="mt-6">
                                <h3 className="text-2xl font-semibold text-gray-800">{ev.title}</h3>
                                <p className="text-pink-500 mt-1 text-lg font-medium">{ev.subtitle}</p>
                                <p className="mt-4 text-gray-600 leading-relaxed text-center">{ev.text}</p>
                            </div>
                        </motion.article>
                    ))}
                </main>

                {active && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6 backdrop-blur-sm">
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="bg-white max-w-3xl w-full rounded-3xl shadow-2xl overflow-hidden ring-4 ring-pink-100">
                            <div className="flex justify-end p-4">
                                <button onClick={() => setActive(null)} className="text-gray-400 hover:text-pink-500 text-xl px-3 transition">✕</button>
                            </div>
                            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                <img src={active.image} alt={active.title} className="w-full h-auto max-h-80 object-cover rounded-xl shadow-md mx-auto border-4 border-pink-50" />
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl font-bold font-serif text-gray-900">{active.title}</h3>
                                    <p className="mt-2 text-pink-600 text-lg">{active.subtitle}</p>
                                    <p className="mt-4 text-gray-700 leading-relaxed">{active.text}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}

                <audio
                    ref={audioRef}
                    src={birthdaySong}
                    loop
                />

                <footer className="mt-12 text-center text-pink-400">Made with ❤️ just for you.</footer>
            </div>
        </div>
    );
}
