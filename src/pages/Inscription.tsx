import React from 'react';

export const Inscription: React.FC = () => {
    return (
        <div className={"connection-container"}>

            <main className={"connect-section"}>
                <div className="login-card">

                    <h1 className={"login-title"}>Création de compte</h1>

                    <form className={"login-form"}>
                        <input
                            type="text"
                            placeholder="Nom"
                            className="input-field"
                        />
                        <input
                            type="text"
                            placeholder="Prénom"
                            className="input-field"
                        />
                        <input
                            type="text"
                            placeholder="Pseudonyme"
                            className="input-field"
                        />
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            className="input-field"
                        />
                        <input
                            type="password"
                            placeholder="Confirmez votre mot de passe"
                            className="input-field"
                        />
                        <input
                            type="text"
                            placeholder="Numéro de téléphone"
                            className="input-field"
                        />
                        <input
                            type="text"
                            placeholder="Adresse miel"
                            className="input-field"
                        />
                        <input
                            type="text"
                            placeholder="Pays"
                            className="input-field"
                        />

                        <button type="submit" className={"btn-login-submit"}>Créer votre compte</button>

                        <div className="options-container">

                            <div className="option-row">
                                <input type="checkbox" id="promotions" className="checkbox-input" defaultChecked/>
                                <label htmlFor="promotions" className="option-label">
                                    Souhaitez-vous recevoir nos offres promotionnelles par mail ?
                                </label>
                            </div>

                            <div className="option-row">
                                <input type="checkbox" id="cgu" className="checkbox-input" defaultChecked/>
                                <label htmlFor="cgu" className="option-label">
                                    Acceptez-vous les conditions générales d’utilisation ?
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};