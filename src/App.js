import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [title, setTitle] = useState('Wall-E');


    function handleChange(event) {

        setTitle(event.target.value);
    }

    function handleClick() {
      alert(title);
    }

    let message ='';
    
    const movies = [

    {title: "Wall-E"},

    {title: "Pulp Fiction"},

    {title: "Matrix"},

    {title: "1670"},

];
    
    if (title.length === 0) {
      message = "Wpisz coś...";
    } else if (title.length < 10) {
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
            <button type="button" onClick={()=> alert(title)}>Pokaż tytuł</button>
       
          <ul>
            {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
          </ul>
        </div>

    );

}

export default App;