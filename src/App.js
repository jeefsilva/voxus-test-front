import React from 'react';
import './styles/App.scss';
import logo from './assets/logo.svg';
import logoFooter from './assets/logo-footer.svg';
import ValidationForm from "./ValidationForm";

function App() {
    return (
        <div className={'App'}>
            <header className={'flex-column-center'}>
                <div className={'logo-section'}>
                    <img className={logo} alt='logo' src={logo}/>
                </div>
            </header>
            <section className={'flex-column-center'}>
                <div>
                    <h1 className={'title'}>
                        Você está a poucos passos de otimizar suas campanhas!
                    </h1>
                </div>
                <div>
                    <h2 className={'subtitle'}>
                        Queremos conhecer mais sobre sua empresa para melhorar sua experiência com a Voxus.
                    </h2>
                </div>
                <ValidationForm/>
            </section>
            <footer className={'flex-column-center'}>
                <div className={'flex-center footer-section'}>
                    <img className={'logo-footer'} alt='logo' src={logoFooter}/>
                    <span className={'link-footer'}>Termos de serviço</span>
                    <span className={'link-footer'}>Política de privacidade</span>
                    <span className={'link-footer'}>Opções de anúncio</span>
                </div>
            </footer>
        </div>
    );
}

export default App;
