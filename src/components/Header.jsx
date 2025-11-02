// components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header className="bg-amber-900 text-stone-100 sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-serif font-bold">Уютный Уголок</div>
                <nav>
                    <ul className="flex space-x-8">
                        {['Главная', 'О нас', 'Меню', 'Контакты'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} className="hover:text-amber-200 transition duration-300">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;