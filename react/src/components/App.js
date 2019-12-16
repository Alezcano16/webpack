import React, {useState} from 'react';
import data from './loaders.json';
import Loader from './Loader';

const App = () =>{
    const [loaderList, setLoaderList] = useState([])
    function handleClick() {
        setLoaderList(data.loaders)
        console.log(data.loaders)
    }
    return(
        <div>
        <div>Aplicacion creada con React</div>
        <ul>
        {loaderList.map(item =>  <Loader key={item.id} {...item}/> )}
        </ul>
        <button onClick={handleClick}> Mostrar Lista</button>
        </div>
    )
}
export default App;