import DatePicker from 'react-datepicker'
import React, { Component } from 'react'

import "react-datepicker/dist/react-datepicker.css"
import 'bootstrap/dist/css/bootstrap.min.css'

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

    render() {
        return (
            <div>
                <p>{this.state.startDate}</p>
                <form>
                    <div className="form-group">
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            name="startDate"
                            dateFormat="dd/MM/yyyy"
                        />
                        <button className="btn btn-primary">Show Date</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Datepicker
