import React, { Component } from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1> Oh no. That was not good.</h1>

        } else {
           return this.props.children 
        }
        return (
            <div>
                
            </div>
        )
    }
}
export default ErrorBoundry;