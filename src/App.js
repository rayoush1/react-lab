import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [title, setTitle] = useState('Wall-E');


    function handleChange(event) {

        setTitle(event.target.value);
    }

    let message ='';
    
    if (title.length === 0) {
      message = "Wpisz coś...";
    } else if (title.length < 3) {
      message = "Krótki tytuł";
    } else if (title.length < 20) {
      message = "Dobry tytuł";
    } else {
      message = "Za długi tytuł";
    }

    return (

        <div>
            <h1>My favourite movies to watch</h1>

            <h2>My favourite movie for today is {title}</h2>

            <input type="text" value={title} onChange={handleChange}/>

            <div>{message}</div>
        </div>

    );

}

export default App;