import './App.css';
import MyComponent from './components/MyComponent/MyComponent';
import MyClassComponent from "./components/MyClassComponent/MyClassComponent";
import Card from "./components/Card/Card";

function App() {
    const firstName = 'Andrew';
  return (
    <div className="App">
      <MyComponent />
        <MyComponent name={'Борис'}>

        </MyComponent>
      <MyComponent name={'Оксана'}/>
      <MyComponent name={'Дарья'}/>
      <MyComponent name={'Алексей'}/>
      <MyComponent name={'Антон'}/>
        <MyClassComponent>
            <div>Привет, Борис!!!!</div>
        </MyClassComponent>
      <MyClassComponent/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
}

export default App;
