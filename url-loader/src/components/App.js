import React, {useState} from 'react';
import data from './loaders.json';
import Loader from './Loader';
import logo from '../images/platzi.png';
import video from '../videos/que-es-core.mp4';

const App = () =>{
    const [loaderList, setLoaderList] = useState([])
    function handleClick() {
        setLoaderList(data.loaders)
        console.log(data.loaders)
    }
    return(
        <div>
        <video src={video} width={360} controls poster={logo}></video>
        <div>Aplicacion creada con React</div>
        <img width="40" src={logo} alt=""/>
        <ul>
        {loaderList.map(item =>  <Loader key={item.id} {...item}/> )}
        </ul>
        <button onClick={handleClick}> Mostrar Lista</button>
        </div>
    )
}
export default App;