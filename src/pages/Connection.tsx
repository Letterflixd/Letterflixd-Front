import React from 'react';

export const Connection: React.FC = () => {
    return (
        <div className={"connection-container"}>

            <main className={"connect-section"}>
                <div className="login-card">

                    <h1 className={"login-title"}>Identifiez-vous</h1>

                    <form className={"login-form"}>
                        <input
                            type="text"
                            placeholder="E-mail ou Numéro de téléphone"
                            className="input-field"
                        />
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            className="input-field"
                        />

                        <button type="submit" className={"btn-login-submit"}>M'identifier</button>

                        <div className="login-help-row">
                            <div className="remember-me">
                                <input type="checkbox" id="remember" className="checkbox-input" defaultChecked />
                                <label htmlFor="remember" className="remember-me-label">Se souvenir de moi</label>
                            </div>
                            <a href="#" className="forgot-password-link">Mot de passe oublié ?</a>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};