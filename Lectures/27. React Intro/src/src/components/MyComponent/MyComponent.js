import './MyComponent.css';
import MyClassComponent from "../MyClassComponent/MyClassComponent";

function MyComponent() {
    return (
        <div className="MyComponent">
            Hello, MyComponent!
            <MyClassComponent/>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default MyComponent;
