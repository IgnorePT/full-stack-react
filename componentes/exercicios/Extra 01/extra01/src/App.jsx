import {useState , useEffect} from 'react'
import './App.css'

// Components
import AppHeader from './components/AppHeader/AppHeader';
import AppBody from './components/AppBody/AppBody';


function App() {
  const [appState, setAppState] = useState('daily');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.15&lon=-8.61&appid=562a65dd25686ffc1b3c71e44265cb15&lang=pt")
    .then((response) => response.json())
    .then((json) => setWeather(json))
  },[]);

  console.log(weather)

  return (
    <div className="App">
      <AppHeader />
      <AppBody weather={weather} appState={appState}/>
    </div>
  )
}

export default App
