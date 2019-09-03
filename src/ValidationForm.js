import React from "react";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'

const initialState = {
    name: "",
    phone: "",
    email: "",
    company: "",
    link: "",
    nameError: "",
    phoneError: "",
    emailError: "",
    companyError: "",
    linkError: "",
};

export default class ValidationForm extends React.Component {
    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };

    validate = () => {
        let nameError = "";
        let emailError = "";
        let companyError = "";
        let linkError = "";



        if (!this.state.name) {
            nameError = <div className={'helper flex-center'}><span className={'helper-text'}>Este campo é obrigatório!</span> </div>;
        }

        if (!this.state.company) {
            companyError = <div className={'helper flex-center'}><span className={'helper-text'}>Este campo é obrigatório!</span> </div>;
        }

        if (!this.state.email.includes("@")) {
            emailError = <div className={'helper flex-center'}><span className={'helper-text'}>E-mail inválido.</span> </div>;
        }

        if (!this.state.link.includes(".")) {
            linkError = <div className={'helper flex-center'}><span className={'helper-text'}>Domínio inválido</span> </div>;
        }

        if (emailError || nameError || companyError || linkError) {
            this.setState({ emailError, nameError, companyError, linkError });
            return false;
        }

        return true;
    };


    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            let button =
                <div className={'flex-column-center'}>
                    <button className={'button-thanks'} type="submit">Obrigado!</button>
                    <div className={'contact-thanks-section flex-column-center'}>
                        <span>Entraremos em contato em até 24h úteis.</span>
                    </div>
                </div>;
            let terms = <div className={'terms-section'}>
                        <span>
                            *Para usar o trial grátis você precisa ser um e-commerce e
                            concordar com os termos e requisitos do trial gratuito.
                            Saiba mais em: <label>Termos e requisitos de trial gratuito</label>
                        </span>
            </div>;
            this.setState({ button, terms });
            // clear form
            this.setState(initialState);
        }
    };


    render() {
        const { value } = this.state;
        return (
            <div className={'flex-column-center'}>
                <form onSubmit={this.handleSubmit} className={'voxus-form flex-column-center'}>
                    <div>
                        <label className={'input-animation'}>
                            <input
                                name="name"
                                placeholder="name"
                                value={this.state.nome}
                                onChange={this.handleChange}
                            />
                            <span>Nome Completo</span>
                        </label>
                        {this.state.nameError}
                    </div>

                    <PhoneInput
                        placeholder="Telefone"
                        value={ value }
                        onChange={ value => this.setState({ value }) }
                        error={ value ? (isValidPhoneNumber(value) ? undefined : 'Telefone inválido') : '' }/>


                    <div>
                        <label className={'input-animation'}>
                            <input
                                name="email"
                                placeholder="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <span>Endereço de e-mail</span>
                        </label>
                        <div>
                            {this.state.emailError}
                        </div>
                    </div>
                    <div>
                        <label className={'input-animation'}>
                            <input
                                name="company"
                                placeholder="company"
                                value={this.state.company}
                                onChange={this.handleChange}
                            />
                            <span>Nome da empresa</span>
                        </label>
                        <div className={'display-none'}>
                            {this.state. companyError}
                        </div>
                    </div>
                    <div>
                        <label className={'input-animation'}>
                            <input
                                name="link"
                                placeholder="link"
                                value={this.state.link}
                                onChange={this.handleChange}
                            />
                            <span>URL do site</span>
                        </label>
                        <div>
                            {this.state. linkError}
                        </div>
                    </div>
                    <select className={'result-select'}>
                        <option className={'select-disabled'} disabled selected>Verba mensal em mídia</option>
                        <option>&lt;= R$5.000</option>
                        <option>&gt;= R$5.001 e &lt;= R$30.000</option>
                        <option>&gt;= R$30.001 e &lt;= R$100.000</option>
                        <option>&gt;= R$100.001 e &lt;= R$500.000</option>
                        <option>&gt;= R$500.001</option>
                        <option>Não se aplica</option>
                    </select>
                    <button className={'button-submit'} type="submit">Experimentar gratuitamente</button>
                    {this.state.button}
                </form>

                {this.state.terms}
            </div>
        );
    }
}
