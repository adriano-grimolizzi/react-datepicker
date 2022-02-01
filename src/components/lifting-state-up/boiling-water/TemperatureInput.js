import React from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        const temperature = this.props.temperature
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        )
    }
}

export default TemperatureInput
