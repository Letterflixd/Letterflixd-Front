import React from 'react';

export const Home: React.FC = () => {
    return (
        <div className={"home-container"}>

            <main className={"hero-section"}>
            <h1 className={"title"}>Films et séries en limité et pas bien plus</h1>
                <h2 className={"sub-title"}>À partir de 4,67 €. Pas-annulable à tout moment.</h2>

                <div className={"cta-container"}>
                    <p className={"cta-text"}>
                        Prêt à regarder Netflop ? Saisissez votre adresse e-mail pour vous abonner ou
                        réactiver votre abonnement
                    </p>
                    <div className={"email-form"}>
                        <input
                            type="email"
                            placeholder="Adresse e-mail"
                            className="email-input"/>
                        <button className={"btn-primary-cta"}>Commencer</button>
                    </div>
                </div>

            </main>
        </div>
    );
};