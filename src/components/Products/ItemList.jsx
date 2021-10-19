import Item from './Item'
import { Link as RouterLink} from 'react-router-dom'

import Button from 'react-bootstrap/Button'

const ItemList = ({ productos }) => {
    return (
        <>
            {productos.length !== 0 ?
                                    productos.map( producto => <Item producto={producto}  key={producto.id}/>)
                                    :
                                    <div className="d-block text-center mt-5">
                                        <p className="fs-3 text-center">⚠️ No se encuentran productos con esa descripción ⚠️</p>
                                        <RouterLink to='/'>
                                            <Button variant="primary" className="mt-3 mb-5 shadow">Volver al inicio</Button>
                                        </RouterLink>
                                    </div>
                                }
        </>
    )
}

export default ItemList
