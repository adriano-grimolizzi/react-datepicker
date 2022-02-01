import React from "react"

class Clock extends React.Component {

    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    // set a timer whenever the Clock is rendered to the DOM for the first time (mounting).
    // 'componentDidMount' runs after the component output has been rendered to the DOM.
    componentDidMount = () => {
        this.timerId = setInterval(() => this.tick(), 1000)
    }

    // clear that timer whenever the DOM produced by the Clock is removed (unmounting).
    componentWillUnmount = () => {
        clearInterval(this.timerId)
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    render = () =>
        <div>
            <h1>It's {this.state.date.toLocaleTimeString()}.</h1>
        </div>
}

export default Clock
