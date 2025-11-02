// components/Hero.jsx
import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
    return (
        <section id="главная" className="bg-amber-50 h-screen flex items-center justify-center text-center relative">
            {/* Spline на весь экран */}
            <div className="absolute inset-0 z-0">
                <Spline
                    scene="https://prod.spline.design/rzpT-04jmRjIftIE/scene.splinecode"
                />
            </div>

            {/* Текст без фона, белый цвет, позиционирование сверху */}
            <div className="z-10 relative" style={{ marginTop: -800 }}>
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Добро пожаловать в "Уютный Уголок"</h1>
                <p className="text-xl text-white mb-8">Здесь каждый глоток — это история.</p>
            </div>
        </section>
    );
};

export default Hero;