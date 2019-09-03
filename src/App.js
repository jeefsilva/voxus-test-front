import React from 'react';
import './styles/App.scss';
import logo from './assets/logo.svg';
import logoFooter from './assets/logo-footer.svg';

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
                <form className={'voxus-form flex-column-center'}>
                    <label className={'input-animation'}>
                        <input type={'text'} placeholder={'""'}/>
                        <span>Nome Completo</span>
                    </label>
                    <div className={'flex-center'}>
                        <select className={'flag-select'}>
                            <option></option>
                        </select>
                        <label className={'input-animation input-phone'}>
                            <input type={'text'} placeholder={'""'}/>
                            <span>Telefone</span>
                        </label>
                    </div>

                    <label className={'input-animation'}>
                        <input type={'email'} placeholder={'""'}/>
                        <span>Endereço de e-mail</span>
                    </label>
                    <label className={'input-animation'}>
                        <input type={'text'} placeholder={'""'}/>
                        <span>Nome da empresa</span>
                    </label>
                    <label className={'input-animation'}>
                        <input type={'text'} placeholder={'""'}/>
                        <span>URL do site</span>
                    </label>
                    <select className={'result-select'}>
                        <option className={'select-disabled'} disabled >Verba mensal em mídia</option>
                        <option>&lt;= R$5.000</option>
                        <option>&gt;= R$5.001 e &lt;= R$30.000</option>
                        <option>&gt;= R$30.001 e &lt;= R$100.000</option>
                        <option>&gt;= R$100.001 e &lt;= R$500.000</option>
                        <option>&gt;= R$500.001</option>
                        <option>Não se aplica</option>
                    </select>
                    <input className={'button-submit'} type={'submit'} value="Experimentar gratuitamente"/>
                </form>
            </section>
            <footer className={'flex-column-center'}>
                <div className={'flex-center footer-section'}>
                    <img className={'logo-footer'} alt='logo' src={logoFooter}/>
                    <a><span className={'link-footer'}>Termos de serviço</span></a>
                    <a><span className={'link-footer'}>Política de privacidade</span></a>
                    <a><span className={'link-footer'}>Opções de anúncio</span></a>
                </div>
            </footer>
        </div>
    );
}

export default App;
