import DatePicker from 'react-datepicker'
import React, { Component } from 'react'

class Container extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        };
    }

    handleChange = (date) => this.setState({ date })

    render = () =>
        <div>
            <p>{JSON.stringify(this.state.date)}</p>
            <form>
                <div className="form-group">
                    <DatePicker
                        selected={this.state.date}
                        onChange={this.handleChange}
                        name="date"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </form>
        </div>

}

export default Container
