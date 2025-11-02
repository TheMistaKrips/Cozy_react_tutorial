// components/About.jsx
import React from 'react';

const About = () => {
    return (
        <section id="о-нас" className="py-20 bg-stone-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-serif text-amber-900 mb-8">Почему наш кофе — особенный?</h2>
                <p className="max-w-2xl mx-auto text-lg text-stone-600">
                    Мы тщательно отбираем зерна с лучших плантаций мира и обжариваем их с любовью, чтобы подарить вам неповторимый вкус и аромат. Наша кофейня — это место, где вы можете расслабиться, встретиться с друзьями или поработать в спокойной обстановке.
                </p>
            </div>
        </section>
    );
};

export default About;