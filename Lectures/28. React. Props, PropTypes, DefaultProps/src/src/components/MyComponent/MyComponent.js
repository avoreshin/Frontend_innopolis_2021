import './MyComponent.css';
import PropTypes from "prop-types";

function MyComponent({name = 'Default Prop Name', lastName = 'Default Prop LastName'}) {

    return (
        <div className="MyComponent">
            Hello, {name} {lastName}!
        </div>
    );
}

MyComponent.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string
}

export default MyComponent;
