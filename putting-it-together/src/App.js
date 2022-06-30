import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        lastName={"Jones"} 
        firstName={"Julie"}
        personAge={ 24 }
        hairColor={ "Brown" } />
      <PersonCard 
        lastName={"Baxter"} 
        firstName={"Anne"}
        personAge={ 33 }
        hairColor={ "Black" } />
      <PersonCard 
        lastName={"Bear"} 
        firstName={"Oliver"}
        personAge={ 16 }
        hairColor={ "Grey" } />
      <PersonCard 
        lastName={"Shadows"} 
        firstName={"Seymore"}
        personAge={ 42 }
        hairColor={ "Brown" } />
    </div>
  );
}

export default App;
