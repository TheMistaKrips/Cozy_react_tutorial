// components/Menu.jsx
import React from 'react';

const Menu = () => {
    const menuItems = [
        { id: 1, name: 'Эспрессо', description: 'Классический крепкий кофе', price: '180 ₽' },
        { id: 2, name: 'Латте', description: 'Нежный кофе с молочной пенкой', price: '250 ₽' },
        { id: 3, name: 'Капучино', description: 'Идеальный баланс кофе, молока и пены', price: '240 ₽' },
        { id: 4, name: 'Раф', description: 'Сливочный и нежный кофейный напиток', price: '280 ₽' },
    ];

    return (
        <section id="меню" className="py-20 bg-amber-900 text-stone-100">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-serif text-center mb-12">Наше меню</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {menuItems.map((item) => (
                        <div key={item.id} className="bg-stone-100 text-stone-800 p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition duration-300">
                            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                            <p className="text-sm mb-4">{item.description}</p>
                            <p className="text-lg font-semibold">{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;