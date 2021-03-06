import React, { Component } from 'react'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css"
import 'bootstrap/dist/css/bootstrap.min.css'

import './datepicker.css'

class Datepicker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date()
        };
    }

    handleChange = (date) => this.setState({ startDate: date })

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.startDate)
    }

    render = () =>
        <form onSubmit={this.onFormSubmit}>
            <div className="form-group">
                <DatePicker
                    className='custom-datepicker'
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    name="startDate"
                    dateFormat="dd/MM/yyyy" />
                <button className="btn btn-primary">Select</button>
            </div>
        </form>

}

export default Datepicker
