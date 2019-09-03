import React from "react";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'

export default class InputPhone extends React.Component {

    render() {
        const { value } = this.state;
        return (
                <PhoneInput
                    placeholder="Telefone"
                    value={ value }
                    onChange={ value => this.setState({ value }) }
                    error={ value ? (isValidPhoneNumber(value) ? undefined : 'Telefone inválido') : '' }/>
        );
    }
}
