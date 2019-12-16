import '../css/index.css'
import search from './Search'
import Render from './Render'
const id = prompt('quien es ese pokemon')

search(id)
    .then((data=>{
        Render(data)
    }))
    .catch(function(error) {
        console.log('no se encontre el pokemon')
     })