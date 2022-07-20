import './App.css';
import CreateProduct from './components/ProductForm';

function App() {
  return (
    <div className="App">
      <h1> Product Manager </h1>
      <p>
        <CreateProduct />
      </p>
    </div>
  );
}

export default App;
