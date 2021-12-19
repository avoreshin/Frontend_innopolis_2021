import React from 'react';

export default class ClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            prop: 2
        }

        // this.onClick = this.onClick.bind(this);
    }

    onClick = () => {
        this.setState({counter: this.state.counter + 1});
    }

    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <div>{this.state.counter}</div>
                <button onClick={this.onClick}>Counter + 1</button>
            </div>
        )
    }
}
