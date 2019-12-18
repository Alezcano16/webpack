import React, {useState} from 'react';
import data from './loaders.json';
import Loader from './Loader';
import logo from '../images/platzi.png';
import video from '../videos/que-es-core.mp4';

import '../sass/sass.scss';
import '../less/less.less';
import '../stylus/stylus.styl';

const App = () =>{
    const [loaderList, setLoaderList] = useState([])
    function handleClick() {
        setLoaderList(data.loaders)
        console.log(data.loaders)
    }
    return(
        <div>
        <p className="sass">Estilos con SASS</p>
        <p className="less">Estilos con LESS</p>
        <p className="stylus">Estilos con STYLUS</p>
        <p className="post-css">Estilos con POSTCSS</p>
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