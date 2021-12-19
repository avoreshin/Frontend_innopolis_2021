import React from 'react';
import PropTypes from 'prop-types';

export default class MyClassComponent extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        lastName: PropTypes.string
    }
    static defaultProps = {
        name: 'Default Name',
        lastName: 'Default Last Name'
    }
    render() {
        const { name, lastName, children } = this.props;
        console.log(name);
        return (<div>
            Hello Class, {name} {lastName}!
            <div>
                Здесь будет строчка, которая вставлена внутрь тега компонента:<br/>
                {children}
            </div>
        </div>);
    }
}
