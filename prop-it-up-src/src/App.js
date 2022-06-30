import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        lastName={"Jones"} 
        firstName={"Julie"}
        age={ 24 }
        hairColor={ "Brown" } />
      <PersonCard 
        lastName={"Baxter"} 
        firstName={"Anne"}
        age={ 33 }
        hairColor={ "Black" } />
      <PersonCard 
        lastName={"Bear"} 
        firstName={"Oliver"}
        age={ 16 }
        hairColor={ "Grey" } />
      <PersonCard 
        lastName={"Shadows"} 
        firstName={"Seymore"}
        age={ 42 }
        hairColor={ "Brown" } />
    </div>
  );
}

export default App;
