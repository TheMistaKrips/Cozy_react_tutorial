// components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-stone-800 text-stone-400 py-12">
            <div className="container mx-auto px-6 text-center">
                <p className="text-lg mb-4">📍 ул. Кофейная, 15, Калининград</p>
                <p className="mb-4">🕒 С 8:00 до 22:00 ежедневно</p>
                <p className="mb-6">📞 +7 (999) 123-45-67</p>
                <div className="flex justify-center space-x-6">
                    {/* Здесь могут быть иконки соцсетей */}
                    <a href="#" className="hover:text-white transition">VK</a>
                    <a href="#" className="hover:text-white transition">Telegram</a>
                    <a href="#" className="hover:text-white transition">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;